/**
 * Created by austin on 10/4/14.
 */

module.exports = {

    app: {

        port: process.env.PORT || 3000
        , pub_dir: "/public"
        , cookie_secret: "random long string for cookie encryption"
    }
};
