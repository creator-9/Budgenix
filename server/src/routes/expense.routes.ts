import { Router } from "express";
import { createExpense, deleteExpense, getExpenses } from "../controllers/expenses.controller.js";
import { verifyJwt } from "../middleware/verifyJwt.js";
const route = Router();

// Import expense controller functions
route.post("/create",verifyJwt, createExpense);
route.delete("/delete/:expenseId",verifyJwt,deleteExpense);
route.get("/get-expenses",verifyJwt,getExpenses);

export default route;