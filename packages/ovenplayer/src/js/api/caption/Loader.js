/**
 * Created by hoho on 2018. 7. 4..
 */
import {parseResponse} from 'media-captions'

const Loader = function () {
    const that = {};

    that.load = (track, language, successCallback, errorCallback) => {
        fetch(track.file).then(fetchResponse => {
            parseResponse(fetchResponse).then(captionResponse => {
                if (captionResponse.errors.length > 0) {
                    errorCallback(captionResponse.errors);
                    return;
                }
                successCallback(captionResponse.cues);
            });
        })
    };

    return that;
};

export default Loader;
