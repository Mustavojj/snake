export const APP_CONFIG = {
    APP_NAME: "GRAM SNAKE",
    BOT_USERNAME: "Zentrxbot",
    MINIMUM_WITHDRAW: 0.03,
    WITHDRAWAL_FEES: 0,
    REFERRAL_PERCENTAGE: 10,
    REFERRAL_POWER_REWARD: 3000,
    MINING_SESSION_HOURS: 5,
    POWER_PER_TON_RATE: 0.0000125,
    POWER_PER_DAY_RATE: 0.0003,
    TON_PRICE_PER_100: 0.20,
    TASK_VERIFICATION_DELAY: 10,
    DEFAULT_USER_AVATAR: "https://i.ibb.co/bjyVgYqJ/256e636cf3a0.jpg",
    TON_WALLET_ADDRESS: "UQCrXfE4_ktpwyZJzmGuCt6zXE5mErFV8VczSjEZvRuLy9_q",
    AD_COOLDOWN_HOURS: 5,
    REWARD_AD_BLOCK_ID: "34446",
    INTERSTITIAL_AD_BLOCK_ID: "int-34445",
    BOT_LINK: "https://t.me/Zentrxbot/mine?startapp=",
    DAILY_CHECK_NEWS_LINK: "https://t.me/Zentrxb",
    STAR_PRICE_PER_100: 1,
    REFERRAL_REQUIRED_TASKS: 5,
    REFERRAL_REQUIRED_MINES: 2,
    CRYPTO_BOT_TOKEN: "593486:AAgnc7TtIM9ay5Vwam3vPkqvwSPyT5YcV5q",
    TASK_REWARD: 100,
    TASK_IMAGE: "https://i.ibb.co/bjyVgYqJ/256e636cf3a0.jpg",
    DAILY_BONUS_AMOUNT: 250,
    GRAM_ICON: "https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png",
    MINING_ICON: "https://i.ibb.co/bjyVgYqJ/256e636cf3a0.jpg",
    REFERRAL_LINK: "https://t.me/NEJARS",
    
    ICONS: {
        SPIN: "https://cdn-icons-png.flaticon.com/512/17917/17917938.png",
        DICE: "https://cdn-icons-png.flaticon.com/512/12907/12907818.png",
        LOTTERY: "https://cdn-icons-png.flaticon.com/512/2108/2108661.png",
        USDT: "https://cdn-icons-png.flaticon.com/512/15207/15207964.png",
        GRAM: "https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png",
        STARS: "https://cdn-icons-png.flaticon.com/512/7656/7656139.png"
    },
    
    GAME_REWARDS: {
        SPIN: {
            prizes: [
                { value: 0.0001, currency: 'GRAM' },
                { value: 0.001, currency: 'GRAM' },
                { value: 0.01, currency: 'GRAM' },
                { value: 0.10, currency: 'GRAM' },
                { value: 1.00, currency: 'GRAM' },
                { value: 0.0001, currency: 'USDT' },
                { value: 0.001, currency: 'USDT' },
                { value: 0.01, currency: 'USDT' },
                { value: 0.10, currency: 'USDT' },
                { value: 1.00, currency: 'USDT' },
                { value: 0.0001, currency: 'STARS' },
                { value: 0.001, currency: 'STARS' },
                { value: 0.01, currency: 'STARS' },
                { value: 0.10, currency: 'STARS' },
                { value: 1.00, currency: 'STARS' }
            ]
        },
        DICE: {
            rewards: {
                '666': 0.001,
                '555': 0.0005,
                '444': 0.0004,
                '333': 0.0003,
                '222': 0.0002,
                '111': 0.0001
            },
            defaultMultiplier: 0.0001
        },
        LOTTERY: {
            symbols: ['🍋', '🍇', '🍒', '777'],
            rewards: {
                '🍇🍇🍇': 0.0006,
                '🍋🍋🍋': 0.0003,
                '777777777': 0.001
            },
            defaultReward: 0.0001
        }
    },
    
    AD_LIMITS: {
        SPIN: { dailyLimit: 3, cooldownMinutes: 1 },
        DICE: { dailyLimit: 3, cooldownMinutes: 1 },
        LOTTERY: { dailyLimit: 3, cooldownMinutes: 1 }
    },
    
    SOCIAL_TASK_REWARDS: {
        GRAM: 0.0001,
        SPIN: 1
    }
};
