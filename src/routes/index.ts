import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

// Init router and path
const router = Router();

router.get("/", (req: Request, res: Response) => {
  try {
    const date = new Date();
    console.log(date);
    return res.status(StatusCodes.OK).json({ message: `Success: ${date}` });
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error" });
  }
});

// Add sub-routes

// Export the base-router
export default router;
