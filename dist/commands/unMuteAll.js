"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class unMuteAll {
    constructor() {
        this._command = "unMuteAll";
    }
    help() {
        return "unmute tous les membres d'un canal vocal";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, messageObject, client) {
        let mentionedChanel = messageObject.member.voiceChannel;
        let suppliedReason = args.slice(1).join(" ") || "";
        messageObject.delete(10);
        if (!messageObject.member.hasPermission("ADMINISTRATOR")) {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais tu n'as pas la permission cheh !`);
            return;
        }
        if (!mentionedChanel) {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais le membre n'existe pas`);
            return;
        }
        for (let member of mentionedChanel.members) {
            member[1].setMute(false);
        }
        messageObject.channel.send(`Les membres du channel ${mentionedChanel} ont été unmute, fermez la tous !`)
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = unMuteAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5NdXRlQWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3VuTXV0ZUFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQXFCLFNBQVM7SUFBOUI7UUFFcUIsYUFBUSxHQUFHLFdBQVcsQ0FBQztJQXNDNUMsQ0FBQztJQXBDRyxJQUFJO1FBRUEsT0FBTywwQ0FBMEMsQ0FBQTtJQUNyRCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFFekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBR0QsVUFBVSxDQUFDLElBQWMsRUFBRSxhQUE4QixFQUFFLE1BQXNCO1FBRTdFLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVuRCxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXpCLElBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFDdkQ7WUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSx5Q0FBeUMsQ0FBQyxDQUFBO1lBQzVHLE9BQU87U0FDVjtRQUVELElBQUcsQ0FBQyxlQUFlLEVBQ25CO1lBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsK0JBQStCLENBQUMsQ0FBQTtZQUNsRyxPQUFPO1NBQ1Y7UUFFRCxLQUFJLElBQUksTUFBTSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQ3pDO1lBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUFDO1FBQzVCLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixlQUFlLG1DQUFtQyxDQUFDO2FBQ3ZHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekIsQ0FBQztDQUNKO0FBeENELDRCQXdDQyJ9