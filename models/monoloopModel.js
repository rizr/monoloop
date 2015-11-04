var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MonoLoopSchema = new Schema({
    cid: Number,
    "MonoloopID": {
        type: String,
        unique: true
    },
    "FirstVisit": Boolean,
    "LastEntryPage": String,
    "LastExitPage": String,
    "VisitCount": Number,
    "PageViewCount": Number,
    "DaysSinceLastVisit": String,
    "AverageTimeOnPage": Number,
    "EntryPage": String,
    "VisitDuration": Number,
    "CurrentPageViewCount": Number,
    "SocialMediaVisitor": Boolean,
    "SearchVisitor": Boolean,
    "DirectVisitor": Boolean,
    "VisitSearchString": String,
    "VisitReferer": String,
    "CurrentURL": String,
    "TimeZone": String,
    "Country": String,
    "City": String,
    "Longitude": Number,
    "Latitude": Number,
    "OS": String,
    "Resolution": String,
    "Browser": String,
    "BrowserVersion": String,
    "BrowserLanguage": String,
    "Javascript": String,
    "Flash": String,
    "Quicktime": String,
    "Wma": String,
    "Silverlight": String,
    "PDF": String,
    "Realplayer": String,
    "Gears": String
});

module.exports = mongoose.model('Monoloop', MonoLoopSchema);