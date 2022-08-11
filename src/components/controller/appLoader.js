import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e03d2620a26e4912ad4209f03b676364', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
