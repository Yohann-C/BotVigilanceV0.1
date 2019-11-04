"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ban {
    constructor() {
        this._command = "ban";
    }
    help() {
        return "ban le membre mentionné";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, messageObject, client) {
        let mentionedUser = messageObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let banLog = `${messageObject.author.username}: ${suppliedReason}`;
        messageObject.delete(10);
        if (!messageObject.member.hasPermission("ADMINISTRATOR")) {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais tu n'as pas la permission cheh !`);
            return;
        }
        if (!mentionedUser) {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais le membre n'existe pas`);
            return;
        }
        messageObject.guild.member(mentionedUser).ban(banLog);
        messageObject.channel.send(`Le membre ${mentionedUser} à été ban avec succés casse toi sale chien`)
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = ban;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2Jhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQXFCLEdBQUc7SUFBeEI7UUFFcUIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQXFDdEMsQ0FBQztJQW5DRyxJQUFJO1FBRUEsT0FBTyx5QkFBeUIsQ0FBQTtJQUNwQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFFekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBR0QsVUFBVSxDQUFDLElBQWMsRUFBRSxhQUE4QixFQUFFLE1BQXNCO1FBRTdFLElBQUksYUFBYSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRCxJQUFJLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLGNBQWMsRUFBRSxDQUFDO1FBRW5FLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFekIsSUFBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUN2RDtZQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLHlDQUF5QyxDQUFDLENBQUE7WUFDNUcsT0FBTztTQUNWO1FBRUQsSUFBRyxDQUFDLGFBQWEsRUFDakI7WUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSwrQkFBK0IsQ0FBQyxDQUFBO1lBQ2xHLE9BQU87U0FDVjtRQUNELGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNyRCxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLGFBQWEsNkNBQTZDLENBQUM7YUFDbEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN6QixDQUFDO0NBQ0o7QUF2Q0Qsc0JBdUNDIn0=