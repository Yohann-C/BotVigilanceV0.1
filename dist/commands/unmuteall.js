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
class unmuteall {
    constructor() {
        this._command = "unmuteall";
    }
    help() {
        return "unmute tous les membres d'un canal vocal";
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
                member[1].setMute(false);
            }
            messageObject.channel.send(`Les membres du channel ${mentionedChanel} ont été unmute, fermez la tous !`)
                .then(console.log)
                .catch(console.error);
        });
    }
}
exports.default = unmuteall;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5tdXRlYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3VubXV0ZWFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLE1BQXFCLFNBQVM7SUFBOUI7UUFFcUIsYUFBUSxHQUFHLFdBQVcsQ0FBQztJQTRDNUMsQ0FBQztJQTFDRyxJQUFJO1FBRUEsT0FBTywwQ0FBMEMsQ0FBQTtJQUNyRCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFFekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBR0ssVUFBVSxDQUFDLElBQWMsRUFBRSxhQUE4QixFQUFFLE1BQXNCOztZQUVuRixJQUFJLGVBQWUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN4RCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFbkQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUN0RCxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSx5Q0FBeUMsQ0FBQztxQkFDdkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNYLE9BQTJCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDcEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDbEIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsK0JBQStCLENBQUM7cUJBQzdGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDWCxPQUEyQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQ3BDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE9BQU87YUFDVjtZQUVELEtBQUssSUFBSSxNQUFNLElBQUksZUFBZSxDQUFDLE9BQU8sRUFBRTtnQkFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQUU7WUFDekUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLGVBQWUsbUNBQW1DLENBQUM7aUJBQ25HLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2lCQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzdCLENBQUM7S0FBQTtDQUNKO0FBOUNELDRCQThDQyJ9