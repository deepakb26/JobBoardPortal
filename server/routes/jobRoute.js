import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {
  createJob,
  deleteJobPost,
  getJobById,
  getJobPosts,
  updateJob,
  applyForJob,
  checkifApplied,
  applicantdetails
} from "../controllers/jobController.js";

const router = express.Router();

// POST JOB
router.post("/upload-job", userAuth, createJob);

// UPDATE JOB
router.put("/update-job/:jobId", userAuth, updateJob);

// GET JOB POST
router.get("/find-jobs", getJobPosts);
router.get("/get-job-detail/:id", getJobById);

// DELETE JOB POST
router.delete("/delete-job/:id", userAuth, deleteJobPost);

//USER APPLIES FOR JOB
router.put("/get-job-detail/:id",userAuth,applyForJob)

router.get("/has-user-applied/:id",userAuth,checkifApplied)

router.get("/applicantdetails",userAuth,applicantdetails)

export default router;