const { AnimeLevel1, AnimeLevel2, AnimeLevel3, AnimeLevel4, AnimeLevel5, Options } = require("../models/schema");

const getLevel1 = async (req, res) =>{
    try {
        const level1 = await AnimeLevel1.aggregate([{$sample:{size: 1}}]);

        if (level1.length === 0) {
            return res.status(404).json({ message: 'No questions found.' });
        }
        res.status(200).json(level1[0]);
    } catch (error) {
        res.status(500).json({msg:  `error`})
    }
}
const getLevel2 = async (req, res) =>{
    try {
        const level2 = await AnimeLevel2.aggregate([{$sample:{size: 1}}]);

        if (level2.length === 0) {
            return res.status(404).json({ message: 'No questions found.' });
        }
        res.status(200).json(level2[0]);
    } catch (error) {
        res.status(500).json({msg:  `error`})
    }
}
const getLevel3 = async (req, res) =>{
    try {
        const level3 = await AnimeLevel3.aggregate([{$sample:{size: 1}}]);

        if (level3.length === 0) {
            return res.status(404).json({ message: 'No questions found.' });
        }
        res.status(200).json(level3[0]);
    } catch (error) {
        res.status(500).json({msg:  `error`})
    }
}
const getLevel4 = async (req, res) =>{
    try {
        const level4 = await AnimeLevel4.aggregate([{$sample:{size: 1}}]);

        if (level4.length === 0) {
            return res.status(404).json({ message: 'No questions found.' });
        }
        res.status(200).json(level4[0]);
    } catch (error) {
        res.status(500).json({msg:  `error`})
    }
}
const getLevel5 = async (req, res) =>{
    try {
        const level5 = await AnimeLevel5.aggregate([{$sample:{size: 1}}]);

        if (level5.length === 0) {
            return res.status(404).json({ message: 'No questions found.' });
        }
        res.status(200).json(level5[0]);
    } catch (error) {
        res.status(500).json({msg:  `error`})
    }
}
const getOptions = async(req, res) => {
    try {
        const options = await Options.find  ({});
        res.status(200).json({options})
    } catch (error) {
        res.status(500).json({msg:  `error`})
    }
}


module.exports = {
    getLevel1,
    getLevel2,
    getLevel3,getLevel4,
    getLevel5,
    getOptions
};