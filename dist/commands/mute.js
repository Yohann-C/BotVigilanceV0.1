"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class mute {
    constructor() {
        this._command = "mute";
    }
    help() {
        return "mute le membre mentionné";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, messageObject, client) {
        let mentionedUser = messageObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${messageObject.author.username}: ${suppliedReason}`;
        messageObject.delete(10);
        if (!messageObject.member.hasPermission("ADMINISTRATOR")) {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais tu n'as pas la permission cheh !`);
            return;
        }
        if (!mentionedUser) {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais le membre n'existe pas`);
            return;
        }
        messageObject.guild.member(mentionedUser).setMute(true);
        messageObject.channel.send(`Le membre ${mentionedUser} à été mute avec succés, ferme un peu ta gueule`)
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = mute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9tdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFDO0lBcUN2QyxDQUFDO0lBbkNHLElBQUk7UUFFQSxPQUFPLDBCQUEwQixDQUFBO0lBQ3JDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUV6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFHRCxVQUFVLENBQUMsSUFBYyxFQUFFLGFBQThCLEVBQUUsTUFBc0I7UUFFN0UsSUFBSSxhQUFhLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25ELElBQUksT0FBTyxHQUFHLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssY0FBYyxFQUFFLENBQUM7UUFFcEUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV6QixJQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQ3ZEO1lBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEseUNBQXlDLENBQUMsQ0FBQTtZQUM1RyxPQUFPO1NBQ1Y7UUFFRCxJQUFHLENBQUMsYUFBYSxFQUNqQjtZQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLCtCQUErQixDQUFDLENBQUE7WUFDbEcsT0FBTztTQUNWO1FBQ0QsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZELGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsYUFBYSxpREFBaUQsQ0FBQzthQUN0RyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzthQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3pCLENBQUM7Q0FDSjtBQXZDRCx1QkF1Q0MifQ==