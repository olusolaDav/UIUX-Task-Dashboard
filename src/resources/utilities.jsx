export function convertRouteToUrl(route, parameters) {
    let url = route;
    Object.entries(parameters).forEach(([key, value]) => {
        url = url.replace(`:${key}`, value);
    });
    return url;
}
