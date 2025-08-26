/**
 * Created by hoho on 2018. 7. 24..
 */
import OvenTemplate from "view/engine/OvenTemplate";
import LA$ from 'utils/likeA$';

const FrameButtons = function ($container, api) {
    const onRendered = function($current, template){
    };
    const onDestroyed = function(template){

    };
    const events = {
        "click .op-frame-button" : function(event, $current, template){
            event.preventDefault();
            let value = LA$(event.currentTarget).attr("op-data-value");
            if(value){
                api.seekFrame(parseInt(value));
            }
        }
    };

    return OvenTemplate($container, "FrameButtons", api.getConfig(), null, events, onRendered, onDestroyed );
};

export default FrameButtons;
