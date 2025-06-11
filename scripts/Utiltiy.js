const parseCookies = _cookie => {
    //_cookie.split("; ") => ['username=Tom', 'theme=dark']
    return _cookie.split("; ").reduce((acc, cookie) => {
        const [key, value] = cookie.split("="); //['username','Tom']、['theme','dark']
        acc[key] = decodeURIComponent(value);  //{'username':'tom', 'theme':'dark'}
        return acc;
    }, {});
}