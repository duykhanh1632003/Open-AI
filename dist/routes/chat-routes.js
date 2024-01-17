import { Router } from "express";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";
const chatRoutes = Router();
chatRoutes.post("/new", validate(chatCompletionValidator), verifyToken, generateChatCompletion);
export default chatRoutes;
//# sourceMappingURL=chat-routes.js.map