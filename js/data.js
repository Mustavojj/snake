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
        TICTACTOE: "https://cdn-icons-png.flaticon.com/512/18936/18936008.png",
        DICE: "https://cdn-icons-png.flaticon.com/512/11101/11101687.png",
        LOTTERY: "https://cdn-icons-png.flaticon.com/512/10751/10751062.png",
        GRAM: "https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png",
        GAMES: "https://cdn-icons-png.flaticon.com/512/17301/17301413.png",
        POINTS: "https://cdn-icons-png.flaticon.com/512/4108/4108370.png",
        LOTTERY_SYMBOL: "https://cdn-icons-png.flaticon.com/512/8616/8616978.png"
    },
    
    GAME_REWARDS: {
        TICTACTOE: {
            win: { gram: 0.0005, points: 100 },
            draw: { gram: 0, points: 25 },
            lose: { gram: 0, points: 0 }
        },
        DICE: {
            pointsMultiplier: 1,
            gramReward: 0.0005,
            defaultPoints: 20
        },
        LOTTERY: {
            '🍋🍋🍋': { gram: 0.0005, points: 50 },
            '🍇🍇🍇': { gram: 0.0005, points: 50 },
            '🍎🍎🍎': { gram: 0.0005, points: 50 },
            'jackpot': { gram: 0.0005, points: 100 },
            default: { gram: 0.0002, points: 20 }
        }
    },
    
    AD_LIMITS: {
        dailyLimit: 30,
        cooldownMinutes: 1
    },
    
    SOCIAL_TASK_REWARDS: {
        GRAM: 0.0001,
        GAMES: 1
    },
    
    LEADERBOARD: {
        rewards: {
            1: 1.0,
            2: 0.70,
            3: 0.30
        },
        topDisplay: 10
    }
};
