require('dotenv').config();

const fetch = require('node-fetch');
// NUXT_BASE_URL needs to be defined in .env for project root.
const host = (process.env['NUXT_BASE_URL']).replace(/\/$/, '');

exports.handler = async (event) => {
    // We don't want to do redirects on POST requests or anything other than GET requests.
    if (event.httpMethod === 'GET') {
        // The URI; does not include the host, but does start with a forward slash.
        const fullPath = event.path;
        // The query string, if there is one.
        const queryParams = event.queryStringParameters;
        // Number of query params we're dealing with.
        const numParams = Object.keys(queryParams).length;
        // Check if we should do a redirect or not
        const allowRedirect = !fullPath.match(/(\.ico|\.jpe?g|\.webp|\.gifv?|\.png|\.svg|\.css|\.js|\.map|\.json|\.csv|\.xlsx?|\.ttf|\.woff2?|\.otf|\.txt|\.pdf|\.docx?|\.gz|\.rar|\.zip|\.7z|\.tar|\.exe|\.dmg|\.deb|\.rpm|\.ics|\.sh)$/);
        // If there were query parameters, start building out the string to add them back in.
        let params = numParams ? '?' : '';
        let paramsIterator = 0;
        // Set a default status code
        let statusCode = 200;

        // Make sure we're not on a path that shouldn't redirect
        if (allowRedirect && fullPath !== '/') {
            // This is either false or a URL to redirect to. If it remains false then we just load the page.
            let redirect = false;

            // Loop through the queryParams object and build the query parameters string.
            for (const key in queryParams) {
                if (queryParams.hasOwnProperty(key)) {
                    paramsIterator++;
                    params += `${key}=${queryParams[key]}`;
                    params += paramsIterator < numParams ? '&' : '';
                }
            }

            // Only do this if there's not a redirect already set
            if (!redirect) {
                const tests = [
                    [/^\/?approach?(\/|-)$/gi, `services`],
                    [/^\/?commerce-minded\/(.+)$/gi, `commerce-minded-post/$1`]
                ];

                for (const [regex, redirectUrl] of tests) {
                    if (fullPath.match(regex)) {
                        statusCode = 301;
                        redirect = fullPath.replace(regex, redirectUrl);
                        break;
                    }
                }
            }

            if (redirect) {
                return {
                    statusCode,
                    body: '',
                    headers: {
                        Location: `${host}/${redirect}${params}`,
                        'Cache-Control': 'no-cache',
                        'Content-Length': '0',
                        'Content-Type': 'text/html; charset=utf-8',
                        Connection: 'close',
                        'Content-Security-Policy': 'referrer always',
                        'Referrer-Policy': 'unsafe-url',
                    },
                };
            }

            // All of this should only run if we hit a 404.
            const body = await fetch(`${host}/not-found-404`, { method: 'GET' }).then(res => res.text());
            return {
                statusCode: 404,
                body: body,
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify({
                event: event
            }),
        };
    }
};
