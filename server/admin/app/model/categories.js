module.exports = (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const CategoriesSchema = new Schema({
        name: {
            type: "string",
            min: 2,
            max: 20,
            format: /^[\u4E00-\u9FA5A-Za-z0-9_]{2,20}$/,
        },
        createTime: {
            type: "number",
            default: 0,
        },
        updateTime: {
            type: "number",
            default: 0,
        },
        acticleNum: {
            type: "number",
            default: 0,
        }

    }, {
        collection: "categories",
        versionKey: false,
    });

    return mongoose.model("Categories", CategoriesSchema);
};