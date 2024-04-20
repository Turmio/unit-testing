import {express} from "express";
import todoModels from "src/todo/todoModels.js"
import todoService from "src/todo/todoService.js"
import todoRoutes from "src/todo/todoRoutes.js"

const router = express()

todoRoutes(router, todoService)

