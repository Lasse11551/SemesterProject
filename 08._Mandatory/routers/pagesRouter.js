import { Router } from "express"
import { homepagePage, introductionPage, firstServerPage, servingHtmlFilesPage, timePage, exportimportPage, ssrPage, asyncPage } from "../util/readPages.js";

const router = Router();

    router.get("/", (req, res) => {
        res.send(homepagePage)
    })
    
    router.get("/introduction", (req, res) => {
        res.send(introductionPage)
    })
    
    router.get("/firstserver", (req, res) => {
        res.send(firstServerPage)
    })
    
    router.get("/servinghtmlfiles", (req, res) => {
        res.send(servingHtmlFilesPage)
    })
    
    router.get("/time", (req, res) => {
        res.send(timePage)
    })
    
    router.get("/exportimport", (req, res) => {
        res.send(exportimportPage)
    })
    
    router.get("/ssr", (req, res) => {
        res.send(ssrPage)
    })
    
    router.get("/async", (req, res) => {
        res.send(asyncPage)
    })

export default router;