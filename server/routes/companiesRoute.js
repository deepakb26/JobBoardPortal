import express from 'express'
import { getCompanies, getCompanyById, getCompanyJobListing, getCompanyProfile, register, signIn, updateCompanyProfile,viewApplications } from '../controllers/companiesController.js';
import userAuth from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/register',register)
router.post('/login',signIn)

router.post('/get-company-profile',userAuth,getCompanyProfile);
router.post('/get-company-joblisting',userAuth,getCompanyJobListing);
router.get('/',getCompanies);
router.get('/get-company/:id',getCompanyById);

router.put('/update-company',userAuth,updateCompanyProfile);

router.get('/jobs/:id',userAuth,viewApplications);


export default router;




