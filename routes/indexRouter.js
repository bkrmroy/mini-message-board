import { Router } from "express";
const indexRouter = Router();
const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

indexRouter.get("/", (req, res) => {
	res.render("index", { messages: messages });
});
indexRouter.post("/new", (req, res) => {
	const message = req.body.message;
	const name = req.body.name;
	messages.push({ text: message, user: name, added: new Date() });
	res.redirect("/");
});
export default indexRouter;
