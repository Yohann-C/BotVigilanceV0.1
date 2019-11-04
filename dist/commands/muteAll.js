"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class muteAll {
    constructor() {
        this._command = "muteAll";
    }
    help() {
        return "mute tous les membres d'un canal vocal";
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
            member[1].setMute(true);
        }
        messageObject.member.setMute(false);
        messageObject.channel.send(`Les membres du channel ${mentionedChanel} ont été mute, fermez la tous !`)
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = muteAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0ZUFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9tdXRlQWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsT0FBTztJQUE1QjtRQUVxQixhQUFRLEdBQUcsU0FBUyxDQUFDO0lBdUMxQyxDQUFDO0lBckNHLElBQUk7UUFFQSxPQUFPLHdDQUF3QyxDQUFBO0lBQ25ELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUV6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFHRCxVQUFVLENBQUMsSUFBYyxFQUFFLGFBQThCLEVBQUUsTUFBc0I7UUFFN0UsSUFBSSxlQUFlLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5ELGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFekIsSUFBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUN2RDtZQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLHlDQUF5QyxDQUFDLENBQUE7WUFDNUcsT0FBTztTQUNWO1FBRUQsSUFBRyxDQUFDLGVBQWUsRUFDbkI7WUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSwrQkFBK0IsQ0FBQyxDQUFBO1lBQ2xHLE9BQU87U0FDVjtRQUVELEtBQUksSUFBSSxNQUFNLElBQUksZUFBZSxDQUFDLE9BQU8sRUFDekM7WUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUM7UUFDM0IsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLGVBQWUsaUNBQWlDLENBQUM7YUFDckcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN6QixDQUFDO0NBQ0o7QUF6Q0QsMEJBeUNDIn0=