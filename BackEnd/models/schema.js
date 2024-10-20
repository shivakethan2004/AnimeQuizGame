const mongoose = require("mongoose");

const AnimeSchemaLevel1 = new mongoose.Schema({
  words: String,
  description: String,
  type: String,
  hint: String,
  asked: { type: Boolean, default: false }
});

const AnimeSchemaLevel2 = new mongoose.Schema({
  words: String,
  description: String,
  type: String,
  hint: String,
  asked: { type: Boolean, default: false }
});
const AnimeSchemaLevel3 = new mongoose.Schema({
    words: String,
    description: String,
    type: String,
    hint: String,
    asked: { type: Boolean, default: false }
  });
  const AnimeSchemaLevel4 = new mongoose.Schema({
    words: String,
    description: String,
    type: String,
    hint: String,
    asked: { type: Boolean, default: false }
  });
  const AnimeSchemaLevel5 = new mongoose.Schema({
    words: String,
    description: String,
    type: String,
    hint: String,
    asked: { type: Boolean, default: false }
  });
  const OptionsSchema = new mongoose.Schema({
    words: {
      character: [String],
      anime: [String]
    }
  });

// Add more schemas for level3, level4, etc. if needed

const AnimeLevel1 = mongoose.model("AnimeLevel1", AnimeSchemaLevel1);
const AnimeLevel2 = mongoose.model("AnimeLevel2", AnimeSchemaLevel2);
const AnimeLevel3 = mongoose.model("AnimeLevel3", AnimeSchemaLevel3);
const AnimeLevel4 = mongoose.model("AnimeLevel4", AnimeSchemaLevel4);
const AnimeLevel5 = mongoose.model("AnimeLevel5", AnimeSchemaLevel5);
const Options = mongoose.model("Options", OptionsSchema);
module.exports = { AnimeLevel1, AnimeLevel2 , AnimeLevel3, AnimeLevel4,AnimeLevel5, Options};
