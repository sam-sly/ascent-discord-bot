import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';
import { Config } from '#config';

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
  loadMessageCommandListeners: true,
  defaultCooldown: {
    delay: 10_000,
    filteredUsers: [Config.owner],
    limit: 2,
  }
});

client.login(Config.token);
