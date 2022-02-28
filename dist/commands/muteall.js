"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class muteall {
    constructor() {
        this._command = "muteall";
    }
    help() {
        return "mute tous les membres d'un canal vocal";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, messageObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let mentionedChanel = messageObject.member.voiceChannel;
            let suppliedReason = args.slice(1).join(" ") || "";
            messageObject.delete(0)
                .catch(console.error);
            if (!messageObject.member.hasPermission("ADMINISTRATOR")) {
                messageObject.channel.send(`Désolé ${messageObject.author.username}, mais tu n'as pas la permission cheh !`)
                    .then(message => {
                    message.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            if (!mentionedChanel) {
                messageObject.channel.send(`Désolé ${messageObject.author.username}, mais le membre n'existe pas`)
                    .then(message => {
                    message.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            for (let member of mentionedChanel.members) {
                member[1].setMute(true);
            }
            messageObject.member.setMute(false);
            messageObject.channel.send(`Les membres du channel ${mentionedChanel} ont été mute, fermez la tous !`)
                .then(console.log)
                .catch(console.error);
        });
    }
}
exports.default = muteall;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0ZWFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9tdXRlYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsTUFBcUIsT0FBTztJQUE1QjtRQUVxQixhQUFRLEdBQUcsU0FBUyxDQUFDO0lBNkMxQyxDQUFDO0lBM0NHLElBQUk7UUFFQSxPQUFPLHdDQUF3QyxDQUFBO0lBQ25ELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUV6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFHSyxVQUFVLENBQUMsSUFBYyxFQUFFLGFBQThCLEVBQUUsTUFBc0I7O1lBRW5GLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3hELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVuRCxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztpQkFDbEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUxQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ3RELGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLHlDQUF5QyxDQUFDO3FCQUN2RyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1gsT0FBMkIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3lCQUNwQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDUCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNsQixhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSwrQkFBK0IsQ0FBQztxQkFDN0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNYLE9BQTJCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDcEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsT0FBTzthQUNWO1lBRUQsS0FBSyxJQUFJLE1BQU0sSUFBSSxlQUFlLENBQUMsT0FBTyxFQUFFO2dCQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFBRTtZQUN4RSxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsZUFBZSxpQ0FBaUMsQ0FBQztpQkFDakcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0IsQ0FBQztLQUFBO0NBQ0o7QUEvQ0QsMEJBK0NDIn0=