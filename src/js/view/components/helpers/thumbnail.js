/**
 * Created by hoho on 2018. 7. 24..
 */
import OvenTemplate from 'view/engine/OvenTemplate';

const Thumbnail = function ($container, api, playerState) {

    const onRendered = function ($current, template) {

    };
    const onDestroyed = function () {
        //Do nothing!
    };
    const events = {};

    return OvenTemplate($container, "Thumbnail", api.getConfig(), playerState, events, onRendered, onDestroyed);
};

export default Thumbnail;
