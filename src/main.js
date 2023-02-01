import { Controller } from "./controllers/controllers";
import { emitter } from "./EventEmitter/EventEmitter";
import { Model } from "./models/models";
import { View } from "./views/views";

const app = new Controller(new Model(), new View());
