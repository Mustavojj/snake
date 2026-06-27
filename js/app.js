import { APP_CONFIG } from './data.js';

const translations = {
    en: {
        home: 'Home', invite: 'Invite', my: 'My',
        spin_win: 'SPIN & WIN', lucky_box: 'LUCKY BOX',
        get_more_spins: 'Get More Spins', get_more_boxes: 'Get More Boxes',
        watch_ad: 'Watch Reward AD', complete_tasks: 'Complete Tasks',
        watch: 'Watch', go: 'GO ➜',
        daily_tasks: 'Daily Tasks', daily_checkin: 'Daily Check-in',
        invite_3_friends: 'Invite 3 Friends', complete_10_tasks: 'Complete 10 Tasks',
        claim: 'Claim', progress: '{current}/{total}',
        gram_snake_tasks: 'GRAM SNAKE Tasks',
        add_task: 'Add Task', back: '← Back',
        task_name: 'Task Name', task_url: 'Task URL',
        verification: 'Verification', max_completions: 'Max Completions',
        yes: 'YES', no: 'NO',
        pay_stars: 'PAY {stars} STAR',
        all_fields_required: 'Please fill all fields',
        choose_completions: 'Choose total completions first',
        add_bot_as_admin: 'Add Bot As Admin',
        task_added: 'Task Added!',
        copy_success: 'Copied!',
        link_copied: 'Link copied to clipboard',
        invite_earn: 'Invite & Earn',
        total_earnings: 'Total Earnings',
        claim_rewards: 'Claim Rewards',
        withdraw_funds: 'Withdraw Funds',
        select_currency: 'Select Currency',
        wallet: 'Wallet', amount: 'Amount',
        min_withdraw: 'Min. withdrawal: {min}',
        confirm_withdrawal: 'Confirm Withdrawal',
        transactions: 'Transactions',
        no_transactions: 'No transactions yet',
        spin_reward: 'Spin Reward',
        daily_checkin_reward: 'Daily Check-in',
        task_complete: 'Task Complete',
        withdrawal: 'Withdrawal',
        bonus: 'Bonus',
        usdt: 'USDT', gram: 'GRAM', stars: 'STARS',
        enter_promo: 'Enter promo code',
        promo_code: 'Promo Code',
        loading: 'Loading...',
        no_tasks: 'No tasks available',
        check_later: 'Check back later',
        save_error: 'Failed to save data! Please try again.',
        no_tasks_created: 'No tasks created',
        create_first_task: 'Create your first task now!',
        pending: 'PENDING', active: 'ACTIVE',
        completions: 'completions',
        task_name_placeholder: 'Enter Task Name',
        task_url_placeholder: 'Enter Task URL (https://t.me/..)',
        completions_100: '100', completions_250: '250', completions_500: '500', completions_1000: '1000',
        my_tasks: 'My Tasks',
        withdrawal_fees_note: 'Withdrawal fees: {fees} GRAM',
        available: 'Available',
        copy: 'Copy', share: 'Share',
        total_members: 'Total Members', active_members: 'Active Members',
        earn_percent: 'Earn {percent}% from referrals',
        referrer_reward_notification: 'You received a bonus! Your referral completed the requirements',
        referral_bonus: 'Referral Bonus',
        new_referral: 'New Referral',
        daily_bonus_claimed: 'Already Claimed',
        no_ads: 'No ads available',
        vip: 'VIP',
        free: 'FREE',
        level: 'Level'
    },
    ru: {
        home: 'Главная', invite: 'Пригласить', my: 'Мой',
        spin_win: 'SPIN & WIN', lucky_box: 'LUCKY BOX',
        get_more_spins: 'Получить больше спинов', get_more_boxes: 'Получить больше боксов',
        watch_ad: 'Смотреть рекламу', complete_tasks: 'Выполнить задания',
        watch: 'Смотреть', go: 'ПЕРЕЙТИ ➜',
        daily_tasks: 'Ежедневные задания', daily_checkin: 'Ежедневная проверка',
        invite_3_friends: 'Пригласить 3 друзей', complete_10_tasks: 'Выполнить 10 заданий',
        claim: 'Получить', progress: '{current}/{total}',
        gram_snake_tasks: 'GRAM SNAKE Задания',
        add_task: 'Добавить задание', back: '← Назад',
        task_name: 'Название задания', task_url: 'Ссылка',
        verification: 'Проверка', max_completions: 'Макс. выполнений',
        yes: 'ДА', no: 'НЕТ',
        pay_stars: 'ОПЛАТИТЬ {stars} ЗВЕЗД',
        all_fields_required: 'Заполните все поля',
        choose_completions: 'Сначала выберите общее количество выполнений',
        add_bot_as_admin: 'Добавить бота администратором',
        task_added: 'Задание добавлено!',
        copy_success: 'Скопировано!',
        link_copied: 'Ссылка скопирована',
        invite_earn: 'Приглашай и зарабатывай',
        total_earnings: 'Общий заработок',
        claim_rewards: 'Получить награды',
        withdraw_funds: 'Вывод средств',
        select_currency: 'Выберите валюту',
        wallet: 'Кошелек', amount: 'Сумма',
        min_withdraw: 'Мин. вывод: {min}',
        confirm_withdrawal: 'Подтвердить вывод',
        transactions: 'Транзакции',
        no_transactions: 'Пока нет транзакций',
        spin_reward: 'Награда за спин',
        daily_checkin_reward: 'Ежедневная проверка',
        task_complete: 'Задание выполнено',
        withdrawal: 'Вывод',
        bonus: 'Бонус',
        usdt: 'USDT', gram: 'GRAM', stars: 'STARS',
        enter_promo: 'Введите промокод',
        promo_code: 'Промокод',
        loading: 'Загрузка...',
        no_tasks: 'Нет доступных заданий',
        check_later: 'Заходите позже',
        save_error: 'Ошибка сохранения! Попробуйте снова.',
        no_tasks_created: 'Нет созданных заданий',
        create_first_task: 'Создайте свое первое задание!',
        pending: 'НА РАССМОТРЕНИИ', active: 'АКТИВНА',
        completions: 'выполнений',
        task_name_placeholder: 'Введите название задания',
        task_url_placeholder: 'Введите URL задания (https://t.me/..)',
        completions_100: '100', completions_250: '250', completions_500: '500', completions_1000: '1000',
        my_tasks: 'Мои задания',
        withdrawal_fees_note: 'Комиссия за вывод: {fees} GRAM',
        available: 'Доступно',
        copy: 'Копировать', share: 'Поделиться',
        total_members: 'Всего участников', active_members: 'Активных',
        earn_percent: 'Зарабатывайте {percent}% от рефералов',
        referrer_reward_notification: 'Вы получили бонус! Ваш реферал выполнил условия',
        referral_bonus: 'Реферальный бонус',
        new_referral: 'Новый реферал',
        daily_bonus_claimed: 'Уже получено',
        no_ads: 'Нет доступной рекламы',
        vip: 'VIP',
        free: 'БЕСПЛАТНО',
        level: 'Уровень'
    },
    tr: {
        home: 'Ana Sayfa', invite: 'Davet', my: 'Benim',
        spin_win: 'SPIN & KAZAN', lucky_box: 'LUCKY KUTU',
        get_more_spins: 'Daha Fazla Spin Al', get_more_boxes: 'Daha Fazla Kutu Al',
        watch_ad: 'Ödüllü Reklam İzle', complete_tasks: 'Görevleri Tamamla',
        watch: 'İzle', go: 'GİT ➜',
        daily_tasks: 'Günlük Görevler', daily_checkin: 'Günlük Kontrol',
        invite_3_friends: '3 Arkadaş Davet Et', complete_10_tasks: '10 Görevi Tamamla',
        claim: 'Al', progress: '{current}/{total}',
        gram_snake_tasks: 'GRAM SNAKE Görevler',
        add_task: 'Görev Ekle', back: '← Geri',
        task_name: 'Görev Adı', task_url: 'Bağlantı',
        verification: 'Doğrulama', max_completions: 'Maks. Tamamlama',
        yes: 'EVET', no: 'HAYIR',
        pay_stars: '{stars} YILDIZ ÖDE',
        all_fields_required: 'Tüm alanları doldurun',
        choose_completions: 'Önce toplam tamamlama sayısını seçin',
        add_bot_as_admin: 'Botu Yönetici Olarak Ekle',
        task_added: 'Görev Eklendi!',
        copy_success: 'Kopyalandı!',
        link_copied: 'Bağlantı kopyalandı',
        invite_earn: 'Davet Et ve Kazan',
        total_earnings: 'Toplam Kazanç',
        claim_rewards: 'Ödülleri Al',
        withdraw_funds: 'Para Çek',
        select_currency: 'Para Birimi Seç',
        wallet: 'Cüzdan', amount: 'Miktar',
        min_withdraw: 'Min. çekim: {min}',
        confirm_withdrawal: 'Çekimi Onayla',
        transactions: 'İşlemler',
        no_transactions: 'Henüz işlem yok',
        spin_reward: 'Spin Ödülü',
        daily_checkin_reward: 'Günlük Kontrol',
        task_complete: 'Görev Tamamlandı',
        withdrawal: 'Para Çekme',
        bonus: 'Bonus',
        usdt: 'USDT', gram: 'GRAM', stars: 'STARS',
        enter_promo: 'Promosyon kodunu girin',
        promo_code: 'Promosyon Kodu',
        loading: 'Yükleniyor...',
        no_tasks: 'Görev yok',
        check_later: 'Daha sonra kontrol edin',
        save_error: 'Veri kaydedilemedi! Lütfen tekrar deneyin.',
        no_tasks_created: 'Görev oluşturulmadı',
        create_first_task: 'Şimdi ilk görevinizi oluşturun!',
        pending: 'BEKLEMEDE', active: 'AKTİF',
        completions: 'tamamlama',
        task_name_placeholder: 'Görev Adını Girin',
        task_url_placeholder: 'Görev URL\'sini Girin (https://t.me/..)',
        completions_100: '100', completions_250: '250', completions_500: '500', completions_1000: '1000',
        my_tasks: 'Görevlerim',
        withdrawal_fees_note: 'Çekim ücreti: {fees} GRAM',
        available: 'Mevcut',
        copy: 'Kopyala', share: 'Paylaş',
        total_members: 'Toplam Üye', active_members: 'Aktif Üyeler',
        earn_percent: 'Referanslardan %{percent} kazanın',
        referrer_reward_notification: 'Bonus kazandınız! Referansınız koşulları tamamladı',
        referral_bonus: 'Referans Bonusu',
        new_referral: 'Yeni Referans',
        daily_bonus_claimed: 'Zaten Alındı',
        no_ads: 'Reklam yok',
        vip: 'VIP',
        free: 'ÜCRETSİZ',
        level: 'Seviye'
    },
    ar: {
        home: 'الرئيسية', invite: 'دعوة', my: 'حسابي',
        spin_win: 'SPIN & WIN', lucky_box: 'LUCKY BOX',
        get_more_spins: 'احصل على المزيد من الدورات', get_more_boxes: 'احصل على المزيد من الصناديق',
        watch_ad: 'مشاهدة إعلان', complete_tasks: 'إكمال المهام',
        watch: 'مشاهدة', go: 'اذهب ➜',
        daily_tasks: 'المهام اليومية', daily_checkin: 'تسجيل الدخول اليومي',
        invite_3_friends: 'دعوة 3 أصدقاء', complete_10_tasks: 'إكمال 10 مهام',
        claim: 'استلام', progress: '{current}/{total}',
        gram_snake_tasks: 'مهام GRAM SNAKE',
        add_task: 'إضافة مهمة', back: '← رجوع',
        task_name: 'اسم المهمة', task_url: 'الرابط',
        verification: 'التحقق', max_completions: 'الحد الأقصى للإكمال',
        yes: 'نعم', no: 'لا',
        pay_stars: 'ادفع {stars} نجمة',
        all_fields_required: 'الرجاء ملء جميع الحقول',
        choose_completions: 'اختر العدد الإجمالي للإكمال أولاً',
        add_bot_as_admin: 'إضافة البوت كمدير',
        task_added: 'تمت إضافة المهمة!',
        copy_success: 'تم النسخ!',
        link_copied: 'تم نسخ الرابط',
        invite_earn: 'دعوة واربح',
        total_earnings: 'إجمالي الأرباح',
        claim_rewards: 'استلام المكافآت',
        withdraw_funds: 'سحب الأموال',
        select_currency: 'اختر العملة',
        wallet: 'المحفظة', amount: 'المبلغ',
        min_withdraw: 'الحد الأدنى للسحب: {min}',
        confirm_withdrawal: 'تأكيد السحب',
        transactions: 'المعاملات',
        no_transactions: 'لا توجد معاملات بعد',
        spin_reward: 'مكافأة الدوران',
        daily_checkin_reward: 'تسجيل الدخول اليومي',
        task_complete: 'اكتملت المهمة',
        withdrawal: 'سحب',
        bonus: 'مكافأة',
        usdt: 'USDT', gram: 'GRAM', stars: 'STARS',
        enter_promo: 'أدخل الرمز الترويجي',
        promo_code: 'الرمز الترويجي',
        loading: 'جاري التحميل...',
        no_tasks: 'لا توجد مهام متاحة',
        check_later: 'تحقق لاحقاً',
        save_error: 'فشل حفظ البيانات! حاول مرة أخرى.',
        no_tasks_created: 'لا توجد مهام منشأة',
        create_first_task: 'أنشئ مهمتك الأولى الآن!',
        pending: 'قيد المراجعة', active: 'نشطة',
        completions: 'إكمال',
        task_name_placeholder: 'أدخل اسم المهمة',
        task_url_placeholder: 'أدخل رابط المهمة (https://t.me/..)',
        completions_100: '100', completions_250: '250', completions_500: '500', completions_1000: '1000',
        my_tasks: 'مهامي',
        withdrawal_fees_note: 'رسوم السحب: {fees} GRAM',
        available: 'متوفر',
        copy: 'نسخ', share: 'مشاركة',
        total_members: 'إجمالي الأعضاء', active_members: 'الأعضاء النشطاء',
        earn_percent: 'اربح {percent}% من الإحالات',
        referrer_reward_notification: 'لقد تلقيت مكافأة! أكمل المحال الخاص بك المتطلبات',
        referral_bonus: 'مكافأة الإحالة',
        new_referral: 'إحالة جديدة',
        daily_bonus_claimed: 'تم الاستلام بالفعل',
        no_ads: 'لا توجد إعلانات',
        vip: 'VIP',
        free: 'مجاني',
        level: 'مستوى'
    }
};

class App {
    constructor() {
        this.tg = null;
        this.db = null;
        this.auth = null;
        this.tgUser = null;
        this.isInitialized = false;
        this.deviceId = null;

        this.usdtBalance = 0;
        this.gramBalance = 0;
        this.starsBalance = 0;

        this.spins = 0;
        this.boxes = 0;

        this.dailyCheckinClaimed = false;
        this.dailyCheckinDate = null;
        this.invite3Claimed = false;
        this.invite3Date = null;
        this.complete10Claimed = false;
        this.complete10Date = null;
        this.dailyTasksCompleted = 0;
        this.dailyTasksTotal = 0;

        this.totalReferrals = 0;
        this.activeReferrals = 0;
        this.referralEarnings = { usdt: 0, gram: 0, stars: 0 };
        this.claimableEarnings = { usdt: 0, gram: 0, stars: 0 };
        this.totalEarnings = { usdt: 0, gram: 0, stars: 0 };

        this.transactions = [];
        this.userTasks = [];
        this.completedTasks = new Set();
        this.completedSocialTasks = new Map();
        this.userCompletedPromoCodes = new Set();

        this.lang = 'en';
        this.vibrationEnabled = true;
        this.darkMode = true;

        this.pendingTask = null;
        this.pendingPaymentInterval = null;
        this.isTaskRunning = false;
        this.taskCompletionTimers = new Map();

        this.membershipCache = new Map();

        this.loadSettings();

        this._dirty = false;
        this._saveTimeout = null;
        this._isSaving = false;
    }

    t(key, params = {}) {
        let text = translations[this.lang]?.[key] || translations.en[key] || key;
        for (const [k, v] of Object.entries(params)) {
            text = text.replace(`{${k}}`, v);
        }
        return text;
    }

    formatNumber(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(2) + 'K';
        return num.toFixed(4);
    }

    truncateName(name, maxLength = 15) {
        if (!name) return 'User';
        if (name.length <= maxLength) return name;
        return name.substring(0, maxLength) + '...';
    }

    loadSettings() {
        const saved = localStorage.getItem('gram_snake_settings');
        if (saved) {
            const s = JSON.parse(saved);
            this.lang = s.lang || this.getDeviceLanguage();
            this.vibrationEnabled = s.vibration !== false;
            this.darkMode = s.darkMode !== false;
        } else {
            this.lang = this.getDeviceLanguage();
            this.darkMode = true;
            this.vibrationEnabled = true;
        }
        this.applyTheme();
    }

    saveSettings() {
        localStorage.setItem('gram_snake_settings', JSON.stringify({
            lang: this.lang,
            vibration: this.vibrationEnabled,
            darkMode: this.darkMode
        }));
    }

    getDeviceLanguage() {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.startsWith('ru')) return 'ru';
        if (userLang.startsWith('tr')) return 'tr';
        if (userLang.startsWith('ar')) return 'ar';
        return 'en';
    }

    applyTheme() {
        if (this.darkMode) {
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
        }
    }

    vibrate(type) {
        if (!this.vibrationEnabled) return;
        if (window.Telegram?.WebApp?.HapticFeedback) {
            if (type === 'success') window.Telegram.WebApp.HapticFeedback.notificationOccurred('success');
            else if (type === 'error') window.Telegram.WebApp.HapticFeedback.notificationOccurred('error');
            else window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        }
    }

    showNotification(title, message, type = 'info') {
        this.vibrate(type);
        const el = document.createElement('div');
        el.className = `notif ${type}`;
        const icon = type === 'success' ? 'fa-check-circle' : (type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle');
        el.innerHTML = `<i class="fas ${icon}"></i><div><strong>${title}</strong><br><small>${message}</small></div>`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3000);
    }

    async showAd() {
        try {
            const AdController = window.Adsgram.init({ blockId: APP_CONFIG.INTERSTITIAL_AD_BLOCK_ID });
            await AdController.show();
            return true;
        } catch (e) {
            this.showNotification('Error', this.t('no_ads'), 'warning');
            return false;
        }
    }

    updateHeaderBalances() {
        const usdtEl = document.getElementById('usdt-balance');
        const gramEl = document.getElementById('gram-balance');
        const starsEl = document.getElementById('stars-balance');
        if (usdtEl) usdtEl.textContent = this.usdtBalance.toFixed(4);
        if (gramEl) gramEl.textContent = this.gramBalance.toFixed(4);
        if (starsEl) starsEl.textContent = Math.floor(this.starsBalance);
    }

    scheduleSave() {
        if (this._saveTimeout) clearTimeout(this._saveTimeout);
        this._saveTimeout = setTimeout(() => {
            this.saveUserData(false);
        }, 30000);
    }

    async saveUserData(immediate = false) {
        if (!this.db || !this.tgUser) return false;
        if (this._isSaving) {
            if (immediate) {
                let waited = 0;
                while (this._isSaving && waited < 3000) {
                    await new Promise(resolve => setTimeout(resolve, 50));
                    waited += 50;
                }
                if (this._isSaving) return false;
            } else {
                return true;
            }
        }
        this._isSaving = true;
        try {
            const data = {
                usdtBalance: this.usdtBalance,
                gramBalance: this.gramBalance,
                starsBalance: this.starsBalance,
                spins: this.spins,
                boxes: this.boxes,
                dailyCheckinClaimed: this.dailyCheckinClaimed,
                dailyCheckinDate: this.dailyCheckinDate,
                invite3Claimed: this.invite3Claimed,
                invite3Date: this.invite3Date,
                complete10Claimed: this.complete10Claimed,
                complete10Date: this.complete10Date,
                dailyTasksCompleted: this.dailyTasksCompleted,
                totalReferrals: this.totalReferrals,
                activeReferrals: this.activeReferrals,
                referralEarnings: this.referralEarnings,
                claimableEarnings: this.claimableEarnings,
                totalEarnings: this.totalEarnings
            };
            await this.db.ref(`users/${this.tgUser.id}`).update(data);
            this._dirty = false;
            if (this._saveTimeout) clearTimeout(this._saveTimeout);
            return true;
        } catch (error) {
            console.warn('Failed to save user data:', error);
            return false;
        } finally {
            this._isSaving = false;
        }
    }

    async generateUniqueDeviceId() {
        const userAgent = navigator.userAgent;
        const screen = `${window.screen.width}x${window.screen.height}x${window.screen.colorDepth}`;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const platform = navigator.platform;
        const language = navigator.language;
        let seed = `${userAgent}|${screen}|${timezone}|${platform}|${language}`;
        const cryptoHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(seed));
        const hashArray = Array.from(new Uint8Array(cryptoHash));
        const hexHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 32);
        return `dev_${hexHash}`;
    }

    async checkDevice() {
        this.deviceId = await this.generateUniqueDeviceId();
        const savedDevice = localStorage.getItem('device_owner');
        if (savedDevice && savedDevice !== this.tgUser.id.toString()) {
            this.showNotification('Device Locked', 'Multiple accounts not allowed', 'error');
            setTimeout(() => window.Telegram?.WebApp?.close(), 3000);
            throw new Error('Device already registered with different user');
        }
        localStorage.setItem('device_owner', this.tgUser.id);
        return null;
    }

    async checkUserState() {
        if (!this.db || !this.tgUser) return;
        try {
            const stateSnap = await this.db.ref(`users/${this.tgUser.id}/state`).once('value');
            if (stateSnap.val() === 'ban') {
                const banMessage = document.createElement('div');
                banMessage.className = 'ban-message';
                banMessage.innerHTML = `
                    <i class="fas fa-ban"></i>
                    <h2>Account Banned</h2>
                    <p>Your account has been banned. Please contact support.</p>
                    <button onclick="window.Telegram.WebApp.close()" style="margin-top:20px;padding:12px 24px;background:#4A7CF7;border:none;border-radius:40px;color:white">Close</button>
                `;
                document.getElementById('app').innerHTML = '';
                document.getElementById('app').appendChild(banMessage);
                document.getElementById('app').style.display = 'block';
                document.getElementById('app-loader').style.display = 'none';
                throw new Error('User banned');
            }
        } catch (error) {
            if (error.message === 'User banned') throw error;
            console.warn('Failed to check user state:', error);
        }
    }

    async initFirebase() {
        return new Promise((resolve, reject) => {
            const config = {
                apiKey: "AIzaSyDeFeeuLHk1fjGNAt-niKS-pZeSzXazO2s",
                authDomain: "zentrix-bro.firebaseapp.com",
                databaseURL: "https://zentrix-bro-default-rtdb.europe-west1.firebasedatabase.app",
                projectId: "zentrix-bro",
                storageBucket: "zentrix-bro.firebasestorage.app",
                messagingSenderId: "891224621190",
                appId: "1:891224621190:web:d1850e5d23f97630105107",
                measurementId: "G-YS336CHR83"
            };
            try {
                let app;
                try { app = firebase.initializeApp(config); } catch(e) { app = firebase.app(); }
                this.db = app.database();
                this.auth = app.auth();
                this.auth.signInAnonymously()
                    .then(() => resolve())
                    .catch((error) => reject(error));
            } catch (error) {
                reject(error);
            }
        });
    }

    async forceCreateUserData() {
        const startParam = this.tg.initDataUnsafe?.start_param;
        let referredBy = (startParam && !isNaN(startParam)) ? parseInt(startParam) : null;
        if (referredBy === this.tgUser.id) referredBy = null;

        const userData = {
            id: this.tgUser.id,
            firebaseUid: this.auth.currentUser.uid,
            username: this.tgUser.username || '',
            firstName: this.tgUser.first_name || 'User',
            photoUrl: this.tgUser.photo_url || APP_CONFIG.DEFAULT_USER_AVATAR,
            referredBy: referredBy,
            createdAt: Date.now(),
            usdtBalance: 0,
            gramBalance: 0,
            starsBalance: 0,
            spins: 0,
            boxes: 0,
            dailyCheckinClaimed: false,
            dailyCheckinDate: null,
            invite3Claimed: false,
            invite3Date: null,
            complete10Claimed: false,
            complete10Date: null,
            dailyTasksCompleted: 0,
            totalReferrals: 0,
            activeReferrals: 0,
            referralEarnings: { usdt: 0, gram: 0, stars: 0 },
            claimableEarnings: { usdt: 0, gram: 0, stars: 0 },
            totalEarnings: { usdt: 0, gram: 0, stars: 0 },
            state: 'active'
        };

        await this.db.ref(`users/${this.tgUser.id}`).set(userData);

        const totalUsersRef = this.db.ref('Status/totalUsers');
        const currentTotal = (await totalUsersRef.once('value')).val() || 0;
        await totalUsersRef.set(currentTotal + 1);

        if (referredBy && referredBy !== this.tgUser.id) {
            const referrerRef = this.db.ref(`users/${referredBy}`);
            const referrerSnap = await referrerRef.once('value');
            if (referrerSnap.exists()) {
                const currentTotalRef = referrerSnap.val().totalReferrals ?? 0;
                await referrerRef.update({ totalReferrals: currentTotalRef + 1 });
                await this.sendNotification(referredBy, this.t('new_referral'), `${this.tgUser.first_name} joined using your link`);
            }
        }

        this.usdtBalance = 0;
        this.gramBalance = 0;
        this.starsBalance = 0;
        this.spins = 0;
        this.boxes = 0;
        this.dailyCheckinClaimed = false;
        this.dailyCheckinDate = null;
        this.invite3Claimed = false;
        this.invite3Date = null;
        this.complete10Claimed = false;
        this.complete10Date = null;
        this.dailyTasksCompleted = 0;
        this.totalReferrals = 0;
        this.activeReferrals = 0;
        this.referralEarnings = { usdt: 0, gram: 0, stars: 0 };
        this.claimableEarnings = { usdt: 0, gram: 0, stars: 0 };
        this.totalEarnings = { usdt: 0, gram: 0, stars: 0 };
        this.transactions = [];

        const nameSpan = document.getElementById('user-name');
        if (nameSpan) nameSpan.innerText = this.truncateName(this.tgUser.first_name || 'User');
        const photoImg = document.getElementById('user-photo');
        if (photoImg) photoImg.src = this.tgUser.photo_url || APP_CONFIG.DEFAULT_USER_AVATAR;

        this.updateHeaderBalances();
        this.showNotification('Welcome!', 'Start earning today!', 'success');
    }

    async loadUserData() {
        const cachedUser = localStorage.getItem(`gram_snake_user_${this.tgUser.id}`);
        if (cachedUser) {
            const data = JSON.parse(cachedUser);
            this.usdtBalance = data.usdtBalance ?? 0;
            this.gramBalance = data.gramBalance ?? 0;
            this.starsBalance = data.starsBalance ?? 0;
            this.spins = data.spins ?? 0;
            this.boxes = data.boxes ?? 0;
            this.dailyCheckinClaimed = data.dailyCheckinClaimed ?? false;
            this.dailyCheckinDate = data.dailyCheckinDate ?? null;
            this.invite3Claimed = data.invite3Claimed ?? false;
            this.invite3Date = data.invite3Date ?? null;
            this.complete10Claimed = data.complete10Claimed ?? false;
            this.complete10Date = data.complete10Date ?? null;
            this.dailyTasksCompleted = data.dailyTasksCompleted ?? 0;
            this.totalReferrals = data.totalReferrals ?? 0;
            this.activeReferrals = data.activeReferrals ?? 0;
            this.referralEarnings = data.referralEarnings ?? { usdt: 0, gram: 0, stars: 0 };
            this.claimableEarnings = data.claimableEarnings ?? { usdt: 0, gram: 0, stars: 0 };
            this.totalEarnings = data.totalEarnings ?? { usdt: 0, gram: 0, stars: 0 };
        }

        try {
            const userRef = this.db.ref(`users/${this.tgUser.id}`);
            const snap = await userRef.once('value');
            if (snap.exists()) {
                const d = snap.val();
                this.usdtBalance = d.usdtBalance ?? this.usdtBalance;
                this.gramBalance = d.gramBalance ?? this.gramBalance;
                this.starsBalance = d.starsBalance ?? this.starsBalance;
                this.spins = d.spins ?? this.spins;
                this.boxes = d.boxes ?? this.boxes;
                this.dailyCheckinClaimed = d.dailyCheckinClaimed ?? false;
                this.dailyCheckinDate = d.dailyCheckinDate ?? null;
                this.invite3Claimed = d.invite3Claimed ?? false;
                this.invite3Date = d.invite3Date ?? null;
                this.complete10Claimed = d.complete10Claimed ?? false;
                this.complete10Date = d.complete10Date ?? null;
                this.dailyTasksCompleted = d.dailyTasksCompleted ?? 0;
                this.totalReferrals = d.totalReferrals ?? 0;
                this.activeReferrals = d.activeReferrals ?? 0;
                this.referralEarnings = d.referralEarnings ?? { usdt: 0, gram: 0, stars: 0 };
                this.claimableEarnings = d.claimableEarnings ?? { usdt: 0, gram: 0, stars: 0 };
                this.totalEarnings = d.totalEarnings ?? { usdt: 0, gram: 0, stars: 0 };

                const userDataForCache = {
                    usdtBalance: this.usdtBalance,
                    gramBalance: this.gramBalance,
                    starsBalance: this.starsBalance,
                    spins: this.spins,
                    boxes: this.boxes,
                    dailyCheckinClaimed: this.dailyCheckinClaimed,
                    dailyCheckinDate: this.dailyCheckinDate,
                    invite3Claimed: this.invite3Claimed,
                    invite3Date: this.invite3Date,
                    complete10Claimed: this.complete10Claimed,
                    complete10Date: this.complete10Date,
                    dailyTasksCompleted: this.dailyTasksCompleted,
                    totalReferrals: this.totalReferrals,
                    activeReferrals: this.activeReferrals,
                    referralEarnings: this.referralEarnings,
                    claimableEarnings: this.claimableEarnings,
                    totalEarnings: this.totalEarnings
                };
                localStorage.setItem(`gram_snake_user_${this.tgUser.id}`, JSON.stringify(userDataForCache));
            } else {
                await this.forceCreateUserData();
            }
        } catch (error) {
            console.error('loadUserData error:', error);
            await this.forceCreateUserData();
        }

        const nameSpan = document.getElementById('user-name');
        if (nameSpan) nameSpan.innerText = this.truncateName(this.tgUser.first_name || 'User');
        const photoImg = document.getElementById('user-photo');
        if (photoImg) photoImg.src = this.tgUser.photo_url || APP_CONFIG.DEFAULT_USER_AVATAR;

        this.updateHeaderBalances();
        this.loadTransactions();
        await this.loadCompletedTasks();
        await this.loadUserTasks();
        await this.loadSocialTasks();
    }

    loadTransactions() {
        const saved = localStorage.getItem(`gram_snake_transactions_${this.tgUser?.id}`);
        if (saved) {
            this.transactions = JSON.parse(saved);
            if (this.transactions.length > 10) this.transactions = this.transactions.slice(0, 10);
        } else {
            this.transactions = [];
        }
    }

    saveTransactions() {
        localStorage.setItem(`gram_snake_transactions_${this.tgUser?.id}`, JSON.stringify(this.transactions.slice(0, 10)));
    }

    addTransaction(type, amount, currency, isPositive = true) {
        const symbol = isPositive ? '+' : '-';
        this.transactions.unshift({
            id: Date.now(),
            type: type,
            amount: amount,
            currency: currency,
            symbol: symbol,
            timestamp: Date.now()
        });
        if (this.transactions.length > 10) this.transactions = this.transactions.slice(0, 10);
        this.saveTransactions();
    }

    getTodayUTC() {
        const now = new Date();
        return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())).toISOString().split('T')[0];
    }

    isToday(date) {
        return date === this.getTodayUTC();
    }

    async loadCompletedTasks() {
        if (!this.db) return;
        try {
            const snap = await this.db.ref(`users/${this.tgUser.id}/completedTasks`).once('value');
            this.completedTasks = snap.exists() ? new Set(snap.val()) : new Set();
        } catch (error) {
            console.warn('Failed to load completed tasks:', error);
            this.completedTasks = new Set();
        }
    }

    async loadUserTasks() {
        if (!this.db) return;
        try {
            const snap = await this.db.ref(`userTasks/${this.tgUser.id}`).once('value');
            this.userTasks = [];
            if (snap.exists()) {
                snap.forEach(child => {
                    this.userTasks.push({ id: child.key, ...child.val() });
                });
            }
        } catch (error) {
            console.warn('Failed to load user tasks:', error);
            this.userTasks = [];
        }
    }

    async loadSocialTasks() {
        if (!this.db) return;
        try {
            const snap = await this.db.ref(`users/${this.tgUser.id}/completedSocialTasks`).once('value');
            if (snap.exists()) {
                const tasksObj = snap.val();
                this.completedSocialTasks = new Map();
                for (const [key, value] of Object.entries(tasksObj)) {
                    this.completedSocialTasks.set(key, value);
                }
            } else {
                this.completedSocialTasks = new Map();
            }
        } catch (error) {
            console.warn('Failed to load completed social tasks:', error);
            this.completedSocialTasks = new Map();
        }
    }

    async loadActiveSocialTasks() {
        if (!this.db) return [];
        const activeTasks = [];
        try {
            const usersSnap = await this.db.ref('userTasks').once('value');
            if (usersSnap.exists()) {
                usersSnap.forEach(userTasks => {
                    userTasks.forEach(taskSnap => {
                        const task = { id: taskSnap.key, ...taskSnap.val() };
                        if (task.status === 'active' && task.total < task.max) {
                            const completedTime = this.completedSocialTasks.get(task.id);
                            if (!completedTime || (Date.now() - completedTime) >= 48 * 60 * 60 * 1000) {
                                activeTasks.push(task);
                            }
                        }
                    });
                });
            }
        } catch (error) {
            console.warn('Failed to load active social tasks:', error);
        }
        return activeTasks;
    }

    extractChatId(url) {
        const match = url.match(/t\.me\/([^\/\?]+)/);
        return match ? match[1] : null;
    }

    async checkMembership(channel) {
        const cacheKey = `membership_${channel}_${this.tgUser.id}`;
        const cached = this.membershipCache.get(cacheKey);
        const now = Date.now();
        if (cached && (now - cached.timestamp) < 1800000) {
            return cached.isMember;
        }
        try {
            const res = await fetch('/api/bot-actions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'check_channel', channel: `@${channel}`, userId: this.tgUser.id })
            });
            const data = await res.json();
            if (data.error === 'bot_not_admin') {
                return true;
            }
            const isMember = data.isMember === true;
            this.membershipCache.set(cacheKey, { isMember, timestamp: now });
            return isMember;
        } catch(e) {
            return false;
        }
    }

    async checkBotAdminByUrl(taskUrl) {
        try {
            const res = await fetch('/api/bot-actions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'check_bot_admin_by_url', taskUrl })
            });
            const data = await res.json();
            return data;
        } catch(e) {
            return { isAdmin: false, error: e.message };
        }
    }

    async sendNotification(userId, title, message) {
        try {
            const response = await fetch('/api/send-notification', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, title, message })
            });
            const data = await response.json();
            return data.success;
        } catch (error) {
            console.error('Failed to send notification:', error);
            return false;
        }
    }

    // ============ HOME PAGE ============
    renderHome() {
        const el = document.getElementById('home-page');
        if (!el) return;

        const today = this.getTodayUTC();
        const dailyCheckinDone = this.dailyCheckinClaimed && this.dailyCheckinDate === today;
        const invite3Done = this.invite3Claimed && this.invite3Date === today;
        const complete10Done = this.complete10Claimed && this.complete10Date === today;

        const invite3Progress = this.totalReferrals >= 3 ? 3 : this.totalReferrals;
        const complete10Progress = Math.min(this.dailyTasksCompleted, 10);

        el.innerHTML = `
            <!-- SPIN & WIN -->
            <div class="game-card glass-card" id="spin-game-card">
                <div class="game-card-left">
                    <div class="game-icon spin"><img src="https://cdn-icons-png.flaticon.com/512/8378/8378227.png" style="width:36px;height:36px;object-fit:contain;"></div>
                    <div class="game-info">
                        <h4>${this.t('spin_win')}</h4>
                        <p>${this.t('vip')}</p>
                    </div>
                </div>
                <button class="game-go-btn" data-game="spin">${this.t('go')}</button>
            </div>

            <div class="section-title"><i class="fas fa-plus-circle"></i> ${this.t('get_more_spins')}</div>
            <div class="earn-option glass-card">
                <div class="earn-option-left">
                    <i class="fas fa-play-circle"></i>
                    <span>${this.t('watch_ad')}</span>
                </div>
                <button class="earn-btn" id="watch-spin-ad">${this.t('watch')}</button>
            </div>
            <div class="earn-option glass-card">
                <div class="earn-option-left">
                    <i class="fas fa-tasks"></i>
                    <span>${this.t('complete_tasks')}</span>
                </div>
                <button class="earn-btn secondary" id="go-to-tasks">${this.t('go')}</button>
            </div>

            <!-- LUCKY BOX -->
            <div class="game-card glass-card" id="box-game-card">
                <div class="game-card-left">
                    <div class="game-icon box"><img src="https://cdn-icons-png.flaticon.com/512/18245/18245775.png" style="width:36px;height:36px;object-fit:contain;"></div>
                    <div class="game-info">
                        <h4>${this.t('lucky_box')}</h4>
                        <p>${this.t('free')}</p>
                    </div>
                </div>
                <button class="game-go-btn" data-game="box">${this.t('go')}</button>
            </div>

            <div class="section-title"><i class="fas fa-plus-circle"></i> ${this.t('get_more_boxes')}</div>
            <div class="earn-option glass-card">
                <div class="earn-option-left">
                    <i class="fas fa-play-circle"></i>
                    <span>${this.t('watch_ad')}</span>
                </div>
                <button class="earn-btn" id="watch-box-ad">${this.t('watch')}</button>
            </div>

            <!-- Daily Tasks -->
            <div class="section-title"><i class="fas fa-calendar-day"></i> ${this.t('daily_tasks')}</div>

            <div class="daily-task-card glass-card">
                <div class="daily-task-left">
                    <i class="fas fa-calendar-check"></i>
                    <div class="daily-task-info">
                        <h4>${this.t('daily_checkin')}</h4>
                        <div class="task-reward"><img src="https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png"> 0.001 GRAM</div>
                    </div>
                </div>
                <button class="daily-task-btn ${dailyCheckinDone ? 'done' : ''}" id="daily-checkin-btn">${dailyCheckinDone ? this.t('claim') : this.t('claim')}</button>
            </div>

            <div class="daily-task-card glass-card">
                <div class="daily-task-left">
                    <i class="fas fa-user-plus"></i>
                    <div class="daily-task-info">
                        <h4>${this.t('invite_3_friends')}</h4>
                        <div class="task-reward"><img src="https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png"> 0.003 GRAM</div>
                        <div style="font-size:0.6rem;color:var(--text-secondary)">${invite3Progress}/3</div>
                    </div>
                </div>
                <button class="daily-task-btn ${invite3Done ? 'done' : (this.totalReferrals >= 3 ? 'progress' : '')}" id="invite3-btn">${invite3Done ? this.t('claim') : (this.totalReferrals >= 3 ? this.t('claim') : `${invite3Progress}/3`)}</button>
            </div>

            <div class="daily-task-card glass-card">
                <div class="daily-task-left">
                    <i class="fas fa-check-double"></i>
                    <div class="daily-task-info">
                        <h4>${this.t('complete_10_tasks')}</h4>
                        <div class="task-reward"><img src="https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png"> 0.002 GRAM</div>
                        <div style="font-size:0.6rem;color:var(--text-secondary)">${this.dailyTasksCompleted}/10</div>
                    </div>
                </div>
                <button class="daily-task-btn ${complete10Done ? 'done' : (this.dailyTasksCompleted >= 10 ? 'progress' : '')}" id="complete10-btn">${complete10Done ? this.t('claim') : (this.dailyTasksCompleted >= 10 ? this.t('claim') : `${this.dailyTasksCompleted}/10`)}</button>
            </div>

            <!-- GRAM SNAKE Tasks -->
            <div class="section-title"><i class="fas fa-list-check"></i> ${this.t('gram_snake_tasks')}</div>
            <div id="social-tasks-container"></div>
            <button class="add-task-btn" id="add-task-home-btn" style="margin-top:12px;"><i class="fas fa-plus"></i> ${this.t('add_task')}</button>
        `;

        // Event listeners
        document.querySelector('[data-game="spin"]')?.addEventListener('click', () => this.navigateTo('spin-page'));
        document.querySelector('[data-game="box"]')?.addEventListener('click', () => this.navigateTo('box-page'));
        document.getElementById('go-to-tasks')?.addEventListener('click', () => this.navigateTo('tasks-page'));
        document.getElementById('add-task-home-btn')?.addEventListener('click', () => this.navigateTo('add-task-page'));

        document.getElementById('watch-spin-ad')?.addEventListener('click', async () => {
            if (await this.showAd()) {
                this.spins++;
                this._dirty = true;
                this.saveUserData(false);
                this.showNotification('+1 Spin', 'You earned 1 free spin!', 'success');
                this.renderHome();
            }
        });

        document.getElementById('watch-box-ad')?.addEventListener('click', async () => {
            if (await this.showAd()) {
                this.boxes++;
                this._dirty = true;
                this.saveUserData(false);
                this.showNotification('+1 Box', 'You earned 1 lucky box!', 'success');
                this.renderHome();
            }
        });

        document.getElementById('daily-checkin-btn')?.addEventListener('click', async () => {
            if (this.dailyCheckinClaimed && this.dailyCheckinDate === today) {
                this.showNotification('Info', this.t('daily_bonus_claimed'), 'warning');
                return;
            }
            if (await this.showAd()) {
                this.gramBalance += 0.001;
                this.dailyCheckinClaimed = true;
                this.dailyCheckinDate = today;
                this._dirty = true;
                this.addTransaction(this.t('daily_checkin_reward'), 0.001, 'GRAM', true);
                this.saveUserData(false);
                this.updateHeaderBalances();
                this.showNotification('+0.001 GRAM', 'Daily check-in reward claimed!', 'success');
                this.renderHome();
            }
        });

        document.getElementById('invite3-btn')?.addEventListener('click', async () => {
            if (this.invite3Claimed && this.invite3Date === today) {
                this.showNotification('Info', this.t('daily_bonus_claimed'), 'warning');
                return;
            }
            if (this.totalReferrals < 3) {
                this.showNotification('Info', 'Invite 3 friends first!', 'warning');
                return;
            }
            if (await this.showAd()) {
                this.gramBalance += 0.003;
                this.invite3Claimed = true;
                this.invite3Date = today;
                this._dirty = true;
                this.addTransaction(this.t('bonus'), 0.003, 'GRAM', true);
                this.saveUserData(false);
                this.updateHeaderBalances();
                this.showNotification('+0.003 GRAM', 'Invite 3 friends reward claimed!', 'success');
                this.renderHome();
            }
        });

        document.getElementById('complete10-btn')?.addEventListener('click', async () => {
            if (this.complete10Claimed && this.complete10Date === today) {
                this.showNotification('Info', this.t('daily_bonus_claimed'), 'warning');
                return;
            }
            if (this.dailyTasksCompleted < 10) {
                this.showNotification('Info', 'Complete 10 tasks first!', 'warning');
                return;
            }
            if (await this.showAd()) {
                this.gramBalance += 0.002;
                this.complete10Claimed = true;
                this.complete10Date = today;
                this._dirty = true;
                this.addTransaction(this.t('bonus'), 0.002, 'GRAM', true);
                this.saveUserData(false);
                this.updateHeaderBalances();
                this.showNotification('+0.002 GRAM', 'Complete 10 tasks reward claimed!', 'success');
                this.renderHome();
            }
        });

        this.loadActiveSocialTasks().then(tasks => {
            const container = document.getElementById('social-tasks-container');
            if (container) {
                if (tasks.length > 0) {
                    container.innerHTML = tasks.map(t => `
                        <div class="task-item glass-card">
                            <div class="task-item-left">
                                <img src="${APP_CONFIG.TASK_IMAGE}" class="task-img">
                                <div class="task-item-info">
                                    <h4>${t.name}</h4>
                                    <div class="task-reward"><i class="fas fa-bolt"></i> ${APP_CONFIG.TASK_REWARD} Power</div>
                                </div>
                            </div>
                            <button class="task-btn start" data-id="${t.id}" data-reward="${APP_CONFIG.TASK_REWARD}" data-url="${t.url}" data-verify="${t.verification}">Start</button>
                        </div>
                    `).join('');

                    container.querySelectorAll('.task-btn.start').forEach(btn => {
                        btn.addEventListener('click', async () => {
                            if (this.isTaskRunning) {
                                this.showNotification('Busy', 'Complete current task first', 'warning');
                                return;
                            }
                            const id = btn.dataset.id;
                            const reward = parseInt(btn.dataset.reward);
                            const url = btn.dataset.url;
                            const verify = btn.dataset.verify === 'true';
                            const taskData = tasks.find(t => t.id === id);

                            window.open(url, '_blank');
                            this.isTaskRunning = true;
                            btn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i>';
                            btn.disabled = true;

                            let seconds = APP_CONFIG.TASK_VERIFICATION_DELAY || 10;
                            const interval = setInterval(() => {
                                seconds--;
                                if (seconds <= 0) {
                                    clearInterval(interval);
                                    btn.innerHTML = 'Claim';
                                    btn.disabled = false;
                                    btn.classList.remove('start');
                                    btn.classList.add('check');

                                    const newBtn = btn.cloneNode(true);
                                    btn.parentNode.replaceChild(newBtn, btn);

                                    newBtn.addEventListener('click', async (e) => {
                                        e.stopPropagation();
                                        newBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i>';
                                        newBtn.disabled = true;

                                        let isMember = false;
                                        if (verify) {
                                            const chatId = this.extractChatId(url);
                                            if (chatId) {
                                                isMember = await this.checkMembership(chatId);
                                            } else {
                                                isMember = true;
                                            }
                                        } else {
                                            isMember = true;
                                        }

                                        if (isMember) {
                                            this.completedTasks.add(id);
                                            this.completedSocialTasks.set(id, Date.now());
                                            this.dailyTasksCompleted++;
                                            this._dirty = true;

                                            this.gramBalance += reward / 1000;
                                            this.addTransaction(this.t('task_complete'), reward / 1000, 'GRAM', true);
                                            await this.saveUserData(false);
                                            this.updateHeaderBalances();

                                            newBtn.innerHTML = 'Done';
                                            newBtn.disabled = true;
                                            newBtn.classList.add('done');
                                            newBtn.classList.remove('check');

                                            this.showNotification('Task Completed!', `${reward / 1000} GRAM added`, 'success');
                                            this.renderHome();
                                        } else {
                                            this.showNotification('Join Required', 'Please join the channel first', 'warning');
                                            newBtn.innerHTML = 'Start';
                                            newBtn.disabled = false;
                                            newBtn.classList.remove('check');
                                            newBtn.classList.add('start');
                                        }
                                        this.isTaskRunning = false;
                                    });
                                }
                            }, 1000);
                        });
                    });
                } else {
                    container.innerHTML = `<div class="no-data"><i class="fas fa-globe"></i><p>${this.t('no_tasks')}</p><small>${this.t('check_later')}</small></div>`;
                }
            }
        });
    }

    // ============ SPIN PAGE ============
    renderSpinPage() {
        const el = document.getElementById('spin-page');
        if (!el) return;

        const segments = [
            { label: '0.0001', currency: 'usdt', value: 0.0001, icon: 'https://cdn-icons-png.flaticon.com/512/15207/15207964.png', weight: 90 },
            { label: '0.001', currency: 'usdt', value: 0.001, icon: 'https://cdn-icons-png.flaticon.com/512/15207/15207964.png', weight: 8 },
            { label: '0.01', currency: 'usdt', value: 0.01, icon: 'https://cdn-icons-png.flaticon.com/512/15207/15207964.png', weight: 2 },
            { label: '0.10', currency: 'usdt', value: 0.10, icon: 'https://cdn-icons-png.flaticon.com/512/15207/15207964.png', weight: 0 },
            { label: '0.0001', currency: 'gram', value: 0.0001, icon: 'https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png', weight: 90 },
            { label: '0.001', currency: 'gram', value: 0.001, icon: 'https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png', weight: 8 },
            { label: '0.01', currency: 'gram', value: 0.01, icon: 'https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png', weight: 2 },
            { label: '0.10', currency: 'gram', value: 0.10, icon: 'https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png', weight: 0 },
            { label: '0.0001', currency: 'stars', value: 0.0001, icon: 'https://cdn-icons-png.flaticon.com/512/7656/7656139.png', weight: 90 },
            { label: '0.001', currency: 'stars', value: 0.001, icon: 'https://cdn-icons-png.flaticon.com/512/7656/7656139.png', weight: 8 },
            { label: '0.01', currency: 'stars', value: 0.01, icon: 'https://cdn-icons-png.flaticon.com/512/7656/7656139.png', weight: 2 },
            { label: '0.10', currency: 'stars', value: 0.10, icon: 'https://cdn-icons-png.flaticon.com/512/7656/7656139.png', weight: 0 }
        ];

        const totalWeight = segments.reduce((sum, s) => sum + s.weight, 0);

        el.innerHTML = `
            <div class="page-header">
                <button class="back-btn" data-back="home"><i class="fas fa-arrow-left"></i> ${this.t('back')}</button>
                <h2>${this.t('spin_win')}</h2>
            </div>

            <div class="glass-card" style="padding:20px;text-align:center;">
                <div class="spin-counter">Spins: <span id="spin-count">${this.spins}</span></div>
                <div class="spin-wheel-container">
                    <div class="spin-wheel" id="spin-wheel"></div>
                    <div class="spin-pointer">▼</div>
                </div>
                <button class="spin-btn" id="spin-btn">SPIN</button>
            </div>
        `;

        // Build wheel
        const wheel = document.getElementById('spin-wheel');
        const segmentAngle = 360 / segments.length;
        const colors = ['#4A7CF7', '#5A8CF7', '#6A9CF7', '#7AACF7', '#4A7CF7', '#5A8CF7', '#6A9CF7', '#7AACF7', '#4A7CF7', '#5A8CF7', '#6A9CF7', '#7AACF7'];

        segments.forEach((seg, i) => {
            const deg = i * segmentAngle;
            const slice = document.createElement('div');
            slice.className = 'segment';
            slice.style.transform = `rotate(${deg}deg)`;
            slice.style.background = colors[i % colors.length];
            slice.style.clipPath = `polygon(0 0, 100% 0, 50% 100%)`;
            slice.style.width = '50%';
            slice.style.height = '50%';
            slice.style.position = 'absolute';
            slice.style.transformOrigin = '100% 100%';
            slice.style.display = 'flex';
            slice.style.alignItems = 'center';
            slice.style.justifyContent = 'center';
            slice.style.flexDirection = 'column';
            slice.style.fontSize = '0.5rem';
            slice.style.fontWeight = '600';
            slice.style.color = 'white';
            slice.style.padding = '4px';
            slice.style.textAlign = 'center';
            slice.style.border = '1px solid rgba(255,255,255,0.1)';

            const img = document.createElement('img');
            img.src = seg.icon;
            img.style.width = '16px';
            img.style.height = '16px';
            img.style.borderRadius = '50%';
            img.style.objectFit = 'cover';
            img.style.marginBottom = '2px';
            slice.appendChild(img);

            const label = document.createElement('span');
            label.textContent = seg.label;
            slice.appendChild(label);

            wheel.appendChild(slice);
        });

        let isSpinning = false;

        document.getElementById('spin-btn')?.addEventListener('click', async () => {
            if (isSpinning) return;
            if (this.spins <= 0) {
                this.showNotification('No Spins', 'Watch an ad to get more spins!', 'warning');
                return;
            }

            isSpinning = true;
            this.spins--;
            this._dirty = true;
            document.getElementById('spin-count').textContent = this.spins;

            const btn = document.getElementById('spin-btn');
            btn.disabled = true;
            btn.textContent = 'SPINNING...';

            // Random selection with weights
            let rand = Math.random() * 100;
            let cumulative = 0;
            let selectedIndex = 0;
            for (let i = 0; i < segments.length; i++) {
                cumulative += segments[i].weight;
                if (rand <= cumulative) {
                    selectedIndex = i;
                    break;
                }
            }

            // If weight is 0, fallback to first
            if (segments[selectedIndex].weight === 0) {
                selectedIndex = 0;
            }

            const targetDeg = (360 - selectedIndex * segmentAngle - segmentAngle / 2) + 360 * 5;

            const wheelEl = document.getElementById('spin-wheel');
            wheelEl.style.transition = 'transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
            wheelEl.style.transform = `rotate(${targetDeg}deg)`;

            setTimeout(() => {
                const prize = segments[selectedIndex];
                const currencyMap = { usdt: 'USDT', gram: 'GRAM', stars: 'STARS' };
                const currency = currencyMap[prize.currency] || prize.currency;

                if (prize.currency === 'usdt') {
                    this.usdtBalance += prize.value;
                    this.addTransaction(this.t('spin_reward'), prize.value, 'USDT', true);
                } else if (prize.currency === 'gram') {
                    this.gramBalance += prize.value;
                    this.addTransaction(this.t('spin_reward'), prize.value, 'GRAM', true);
                } else if (prize.currency === 'stars') {
                    this.starsBalance += prize.value;
                    this.addTransaction(this.t('spin_reward'), prize.value, 'STARS', true);
                }

                this._dirty = true;
                this.saveUserData(false);
                this.updateHeaderBalances();

                // Show result
                const modal = document.getElementById('spin-modal');
                const icon = document.getElementById('spin-result-icon');
                const amount = document.getElementById('spin-result-amount');
                const currencyEl = document.getElementById('spin-result-currency');
                if (icon) {
                    icon.innerHTML = `<img src="${prize.icon}" style="width:50px;height:50px;border-radius:50%;object-fit:cover;">`;
                }
                if (amount) amount.textContent = `+${prize.value}`;
                if (currencyEl) currencyEl.textContent = currency;
                modal.style.display = 'flex';

                isSpinning = false;
                btn.disabled = false;
                btn.textContent = 'SPIN';
                this.renderHome();
            }, 5500);
        });

        document.getElementById('close-spin-result')?.addEventListener('click', () => {
            document.getElementById('spin-modal').style.display = 'none';
        });

        document.querySelector('.back-btn[data-back="home"]')?.addEventListener('click', () => {
            this.navigateTo('home-page');
        });
    }

    // ============ BOX PAGE ============
    renderBoxPage() {
        const el = document.getElementById('box-page');
        if (!el) return;

        el.innerHTML = `
            <div class="page-header">
                <button class="back-btn" data-back="home"><i class="fas fa-arrow-left"></i> ${this.t('back')}</button>
                <h2>${this.t('lucky_box')}</h2>
            </div>

            <div class="glass-card" style="padding:30px;text-align:center;">
                <div style="font-size:3rem;margin-bottom:12px;">🎁</div>
                <div style="font-size:1.2rem;font-weight:700;margin-bottom:8px;">${this.t('lucky_box')}</div>
                <div style="color:var(--text-secondary);margin-bottom:20px;">Boxes: <span id="box-count">${this.boxes}</span></div>
                <button class="spin-btn" id="open-box-btn" style="width:120px;height:120px;font-size:0.9rem;">OPEN</button>
            </div>
        `;

        document.getElementById('open-box-btn')?.addEventListener('click', async () => {
            if (this.boxes <= 0) {
                this.showNotification('No Boxes', 'Watch an ad to get more boxes!', 'warning');
                return;
            }

            this.boxes--;
            this._dirty = true;
            document.getElementById('box-count').textContent = this.boxes;

            const currencies = ['usdt', 'gram', 'stars'];
            const randCurrency = currencies[Math.floor(Math.random() * currencies.length)];
            const values = [0.0001, 0.0005, 0.001, 0.005, 0.01];
            const randValue = values[Math.floor(Math.random() * values.length)];

            const currencyMap = { usdt: 'USDT', gram: 'GRAM', stars: 'STARS' };
            const currency = currencyMap[randCurrency];

            if (randCurrency === 'usdt') {
                this.usdtBalance += randValue;
                this.addTransaction(this.t('bonus'), randValue, 'USDT', true);
            } else if (randCurrency === 'gram') {
                this.gramBalance += randValue;
                this.addTransaction(this.t('bonus'), randValue, 'GRAM', true);
            } else {
                this.starsBalance += randValue;
                this.addTransaction(this.t('bonus'), randValue, 'STARS', true);
            }

            this._dirty = true;
            this.saveUserData(false);
            this.updateHeaderBalances();

            this.showNotification(`+${randValue} ${currency}`, 'Lucky box opened!', 'success');
            this.renderBoxPage();
            this.renderHome();
        });

        document.querySelector('.back-btn[data-back="home"]')?.addEventListener('click', () => {
            this.navigateTo('home-page');
        });
    }

    // ============ TASKS PAGE ============
    renderTasksPage() {
        const el = document.getElementById('tasks-page');
        if (!el) return;

        el.innerHTML = `
            <div class="page-header">
                <button class="back-btn" data-back="home"><i class="fas fa-arrow-left"></i> ${this.t('back')}</button>
                <h2>${this.t('gram_snake_tasks')}</h2>
                <button class="add-task-btn" id="add-task-from-tasks" style="padding:6px 14px;font-size:0.7rem;"><i class="fas fa-plus"></i></button>
            </div>
            <div id="tasks-page-container"></div>
        `;

        document.getElementById('add-task-from-tasks')?.addEventListener('click', () => {
            this.navigateTo('add-task-page');
        });

        this.loadActiveSocialTasks().then(tasks => {
            const container = document.getElementById('tasks-page-container');
            if (container) {
                if (tasks.length > 0) {
                    container.innerHTML = tasks.map(t => `
                        <div class="task-item glass-card">
                            <div class="task-item-left">
                                <img src="${APP_CONFIG.TASK_IMAGE}" class="task-img">
                                <div class="task-item-info">
                                    <h4>${t.name}</h4>
                                    <div class="task-reward"><i class="fas fa-bolt"></i> ${APP_CONFIG.TASK_REWARD} Power</div>
                                </div>
                            </div>
                            <button class="task-btn start" data-id="${t.id}" data-reward="${APP_CONFIG.TASK_REWARD}" data-url="${t.url}" data-verify="${t.verification}">Start</button>
                        </div>
                    `).join('');

                    container.querySelectorAll('.task-btn.start').forEach(btn => {
                        btn.addEventListener('click', async () => {
                            if (this.isTaskRunning) {
                                this.showNotification('Busy', 'Complete current task first', 'warning');
                                return;
                            }
                            const id = btn.dataset.id;
                            const reward = parseInt(btn.dataset.reward);
                            const url = btn.dataset.url;
                            const verify = btn.dataset.verify === 'true';
                            const taskData = tasks.find(t => t.id === id);

                            window.open(url, '_blank');
                            this.isTaskRunning = true;
                            btn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i>';
                            btn.disabled = true;

                            let seconds = APP_CONFIG.TASK_VERIFICATION_DELAY || 10;
                            const interval = setInterval(() => {
                                seconds--;
                                if (seconds <= 0) {
                                    clearInterval(interval);
                                    btn.innerHTML = 'Claim';
                                    btn.disabled = false;
                                    btn.classList.remove('start');
                                    btn.classList.add('check');

                                    const newBtn = btn.cloneNode(true);
                                    btn.parentNode.replaceChild(newBtn, btn);

                                    newBtn.addEventListener('click', async (e) => {
                                        e.stopPropagation();
                                        newBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i>';
                                        newBtn.disabled = true;

                                        let isMember = false;
                                        if (verify) {
                                            const chatId = this.extractChatId(url);
                                            if (chatId) {
                                                isMember = await this.checkMembership(chatId);
                                            } else {
                                                isMember = true;
                                            }
                                        } else {
                                            isMember = true;
                                        }

                                        if (isMember) {
                                            this.completedTasks.add(id);
                                            this.completedSocialTasks.set(id, Date.now());
                                            this.dailyTasksCompleted++;
                                            this._dirty = true;

                                            this.gramBalance += reward / 1000;
                                            this.addTransaction(this.t('task_complete'), reward / 1000, 'GRAM', true);
                                            await this.saveUserData(false);
                                            this.updateHeaderBalances();

                                            newBtn.innerHTML = 'Done';
                                            newBtn.disabled = true;
                                            newBtn.classList.add('done');
                                            newBtn.classList.remove('check');

                                            this.showNotification('Task Completed!', `${reward / 1000} GRAM added`, 'success');
                                            this.renderTasksPage();
                                            this.renderHome();
                                        } else {
                                            this.showNotification('Join Required', 'Please join the channel first', 'warning');
                                            newBtn.innerHTML = 'Start';
                                            newBtn.disabled = false;
                                            newBtn.classList.remove('check');
                                            newBtn.classList.add('start');
                                        }
                                        this.isTaskRunning = false;
                                    });
                                }
                            }, 1000);
                        });
                    });
                } else {
                    container.innerHTML = `<div class="no-data"><i class="fas fa-globe"></i><p>${this.t('no_tasks')}</p><small>${this.t('check_later')}</small></div>`;
                }
            }
        });

        document.querySelector('.back-btn[data-back="home"]')?.addEventListener('click', () => {
            this.navigateTo('home-page');
        });
    }

    // ============ ADD TASK PAGE ============
    renderAddTaskPage() {
        const el = document.getElementById('add-task-page');
        if (!el) return;

        const completions = [100, 250, 500, 1000];
        const completionsLabels = completions.map(c => this.t(`completions_${c}`) || c);

        el.innerHTML = `
            <div class="page-header">
                <button class="back-btn" data-back="tasks"><i class="fas fa-arrow-left"></i> ${this.t('back')}</button>
                <h2>${this.t('add_task')}</h2>
            </div>

            <div class="glass-card" style="padding:20px;">
                <div class="form-group">
                    <label class="form-label">${this.t('task_name')}</label>
                    <input type="text" id="task-name-input" class="form-input" maxlength="15" placeholder="${this.t('task_name_placeholder')}">
                </div>
                <div class="form-group">
                    <label class="form-label">${this.t('task_url')}</label>
                    <input type="url" id="task-url-input" class="form-input" placeholder="${this.t('task_url_placeholder')}">
                    <div id="add-admin-div" style="display:none;margin-top:8px;"></div>
                </div>
                <div class="form-group">
                    <label class="form-label">${this.t('verification')}</label>
                    <div class="toggle-group">
                        <button class="toggle-option" data-value="true">${this.t('yes')}</button>
                        <button class="toggle-option active" data-value="false">${this.t('no')}</button>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">${this.t('max_completions')}</label>
                    <div class="toggle-group completions-group">
                        ${completions.map((c, i) => `
                            <button class="toggle-option ${i === 0 ? 'active' : ''}" data-value="${c}">${completionsLabels[i]}</button>
                        `).join('')}
                    </div>
                </div>
                <div class="payment-buttons-group">
                    <button class="pay-btn" id="pay-task-btn">${this.t('pay_stars', { stars: 0 })}</button>
                    <button class="check-btn" id="check-payment-btn" disabled>Check</button>
                </div>
                <div id="add-task-status" style="margin-top:12px;"></div>
            </div>

            <div class="section-title" style="margin-top:20px;"><i class="fas fa-tasks"></i> ${this.t('my_tasks')}</div>
            <div id="my-tasks-list-container"></div>
        `;

        this.renderMyTasks();

        // Verification toggle
        el.querySelectorAll('.toggle-option[data-value]').forEach(opt => {
            opt.addEventListener('click', () => {
                const parent = opt.parentElement;
                parent.querySelectorAll('.toggle-option').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');

                const addAdminDiv = document.getElementById('add-admin-div');
                if (addAdminDiv) {
                    if (opt.dataset.value === 'true') {
                        const botLink = `https://t.me/${APP_CONFIG.BOT_USERNAME}?startchannel=m&admin=invite_users`;
                        addAdminDiv.innerHTML = `<button class="add-bot-btn" onclick="window.open('${botLink}', '_blank')"><i class="fab fa-telegram"></i> ${this.t('add_bot_as_admin')}</button>`;
                        addAdminDiv.style.display = 'block';
                    } else {
                        addAdminDiv.style.display = 'none';
                    }
                }
            });
        });

        // Completions toggle
        el.querySelectorAll('.completions-group .toggle-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const parent = opt.parentElement;
                parent.querySelectorAll('.toggle-option').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');

                const max = parseInt(opt.dataset.value);
                const price = (APP_CONFIG.TON_PRICE_PER_100 * (max / 100));
                const payBtn = document.getElementById('pay-task-btn');
                const checkBtn = document.getElementById('check-payment-btn');
                if (payBtn) {
                    payBtn.textContent = this.t('pay_stars', { stars: price });
                    payBtn.disabled = false;
                }
                if (checkBtn) {
                    checkBtn.disabled = false;
                }
            });
        });

        document.getElementById('pay-task-btn')?.addEventListener('click', async () => {
            const name = document.getElementById('task-name-input').value.trim();
            const url = document.getElementById('task-url-input').value.trim();
            const verification = el.querySelector('.toggle-option.active[data-value]')?.dataset.value || 'false';
            const maxCompletions = parseInt(el.querySelector('.completions-group .toggle-option.active')?.dataset.value || 0);

            if (!name || name.length > 15 || !/^[a-zA-Z0-9\s]+$/.test(name)) {
                this.showNotification('Error', 'Name must be max 15 chars, English only', 'error');
                return;
            }
            if (!url || !url.startsWith('https://')) {
                this.showNotification('Error', 'URL must start with https://', 'error');
                return;
            }
            if (!maxCompletions) {
                this.showNotification('Error', this.t('choose_completions'), 'error');
                return;
            }

            const status = document.getElementById('add-task-status');
            status.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Processing...';

            const taskId = Date.now().toString();
            const price = (APP_CONFIG.TON_PRICE_PER_100 * (maxCompletions / 100));

            if (verification === 'true') {
                const checkResult = await this.checkBotAdminByUrl(url);
                if (!checkResult.isAdmin) {
                    status.innerHTML = '<span style="color:var(--error);">Bot must be admin in the channel for verification</span>';
                    return;
                }
            }

            // Simulate payment
            setTimeout(() => {
                const taskData = {
                    name: name,
                    url: url,
                    category: 'social',
                    verification: verification === 'true',
                    max: maxCompletions,
                    status: 'active',
                    owner: this.tgUser.id,
                    createdAt: Date.now(),
                    reward: APP_CONFIG.TASK_REWARD,
                    total: 0
                };

                this.db.ref(`userTasks/${this.tgUser.id}/${taskId}`).set(taskData).then(() => {
                    this.showNotification('Success', this.t('task_added'), 'success');
                    status.innerHTML = '<span style="color:var(--success);">Task added successfully!</span>';
                    this.loadUserTasks();
                    this.renderMyTasks();
                    document.getElementById('task-name-input').value = '';
                    document.getElementById('task-url-input').value = '';
                }).catch(() => {
                    status.innerHTML = '<span style="color:var(--error);">Failed to add task</span>';
                });
            }, 1000);
        });

        document.querySelector('.back-btn[data-back="tasks"]')?.addEventListener('click', () => {
            this.navigateTo('tasks-page');
        });
    }

    renderMyTasks() {
        const container = document.getElementById('my-tasks-list-container');
        if (!container) return;

        if (this.userTasks.length === 0) {
            container.innerHTML = `<div class="no-data"><i class="fas fa-tasks"></i><p>${this.t('no_tasks_created')}</p><small>${this.t('create_first_task')}</small></div>`;
            return;
        }

        container.innerHTML = this.userTasks.map(task => {
            const statusClass = task.status === 'active' ? 'active' : 'pending';
            const statusText = task.status === 'active' ? this.t('active') : this.t('pending');
            const progress = (task.total / task.max) * 100;

            return `
                <div class="my-task-card">
                    <div class="task-header">
                        <span class="task-name">${task.name}</span>
                        <span class="task-status ${statusClass}">${statusText}</span>
                    </div>
                    ${task.status === 'active' ? `
                        <div class="task-progress">
                            <div class="progress-bar" style="width:${progress}%"></div>
                            <div class="progress-text">${task.total}/${task.max} ${this.t('completions')}</div>
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');
    }

    // ============ INVITE PAGE ============
    renderInvite() {
        const el = document.getElementById('invite-page');
        if (!el) return;

        const link = APP_CONFIG.BOT_LINK + this.tgUser.id;

        const totalEarnings = this.totalEarnings;
        const claimable = this.claimableEarnings;

        el.innerHTML = `
            <div class="glass-card" style="padding:20px;text-align:center;margin-bottom:16px;">
                <h3 style="margin-bottom:12px;"><i class="fas fa-users"></i> ${this.t('invite_earn')}</h3>
                <p style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:12px;">${this.t('earn_percent', { percent: APP_CONFIG.REFERRAL_PERCENTAGE })}</p>
                <div class="invite-stats">
                    <div class="invite-stat-card">
                        <i class="fas fa-user-plus" style="font-size:1.5rem;color:var(--primary);"></i>
                        <div class="stat-value">${this.totalReferrals}</div>
                        <div class="stat-label">${this.t('total_members')}</div>
                    </div>
                    <div class="invite-stat-card">
                        <i class="fas fa-user-check" style="font-size:1.5rem;color:var(--success);"></i>
                        <div class="stat-value">${this.activeReferrals}</div>
                        <div class="stat-label">${this.t('active_members')}</div>
                    </div>
                    <div class="invite-stat-card">
                        <i class="fas fa-coins" style="font-size:1.5rem;color:var(--warning);"></i>
                        <div class="stat-value">${this.formatNumber(Object.values(totalEarnings).reduce((a,b) => a + b, 0))}</div>
                        <div class="stat-label">${this.t('total_earnings')}</div>
                    </div>
                </div>
                <div style="display:flex;gap:8px;margin-top:12px;">
                    <button class="earn-btn" id="copy-invite-link" style="flex:1;"><i class="fas fa-copy"></i> ${this.t('copy')}</button>
                    <button class="earn-btn secondary" id="share-invite-link" style="flex:1;"><i class="fas fa-share"></i> ${this.t('share')}</button>
                </div>
            </div>

            <div class="earnings-section">
                <h4>${this.t('claim_rewards')}</h4>
                <div class="claim-section">
                    <div class="claim-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/15207/15207964.png">
                        <div class="claim-amount">${claimable.usdt.toFixed(4)}</div>
                        <div class="claim-label">USDT</div>
                        <button class="claim-btn ${claimable.usdt <= 0 ? 'done' : ''}" id="claim-usdt">${claimable.usdt <= 0 ? 'Done' : 'Claim'}</button>
                    </div>
                    <div class="claim-card">
                        <img src="https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png">
                        <div class="claim-amount">${claimable.gram.toFixed(4)}</div>
                        <div class="claim-label">GRAM</div>
                        <button class="claim-btn ${claimable.gram <= 0 ? 'done' : ''}" id="claim-gram">${claimable.gram <= 0 ? 'Done' : 'Claim'}</button>
                    </div>
                    <div class="claim-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/7656/7656139.png">
                        <div class="claim-amount">${claimable.stars.toFixed(0)}</div>
                        <div class="claim-label">STARS</div>
                        <button class="claim-btn ${claimable.stars <= 0 ? 'done' : ''}" id="claim-stars">${claimable.stars <= 0 ? 'Done' : 'Claim'}</button>
                    </div>
                </div>
            </div>

            <div class="earnings-section">
                <h4>${this.t('total_earnings')}</h4>
                <div class="claim-section">
                    <div class="claim-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/15207/15207964.png">
                        <div class="claim-amount">${totalEarnings.usdt.toFixed(4)}</div>
                        <div class="claim-label">USDT</div>
                    </div>
                    <div class="claim-card">
                        <img src="https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png">
                        <div class="claim-amount">${totalEarnings.gram.toFixed(4)}</div>
                        <div class="claim-label">GRAM</div>
                    </div>
                    <div class="claim-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/7656/7656139.png">
                        <div class="claim-amount">${totalEarnings.stars.toFixed(0)}</div>
                        <div class="claim-label">STARS</div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('copy-invite-link')?.addEventListener('click', () => {
            navigator.clipboard.writeText(link);
            this.showNotification(this.t('copy_success'), this.t('link_copied'), 'success');
        });

        document.getElementById('share-invite-link')?.addEventListener('click', () => {
            window.open(APP_CONFIG.REFERRAL_LINK || 'https://t.me/NEJARS', '_blank');
        });

        document.getElementById('claim-usdt')?.addEventListener('click', async () => {
            if (this.claimableEarnings.usdt <= 0) return;
            if (await this.showAd()) {
                this.usdtBalance += this.claimableEarnings.usdt;
                this.addTransaction(this.t('bonus'), this.claimableEarnings.usdt, 'USDT', true);
                this.claimableEarnings.usdt = 0;
                this._dirty = true;
                this.saveUserData(false);
                this.updateHeaderBalances();
                this.showNotification('Claimed!', 'USDT rewards claimed', 'success');
                this.renderInvite();
            }
        });

        document.getElementById('claim-gram')?.addEventListener('click', async () => {
            if (this.claimableEarnings.gram <= 0) return;
            if (await this.showAd()) {
                this.gramBalance += this.claimableEarnings.gram;
                this.addTransaction(this.t('bonus'), this.claimableEarnings.gram, 'GRAM', true);
                this.claimableEarnings.gram = 0;
                this._dirty = true;
                this.saveUserData(false);
                this.updateHeaderBalances();
                this.showNotification('Claimed!', 'GRAM rewards claimed', 'success');
                this.renderInvite();
            }
        });

        document.getElementById('claim-stars')?.addEventListener('click', async () => {
            if (this.claimableEarnings.stars <= 0) return;
            if (await this.showAd()) {
                this.starsBalance += this.claimableEarnings.stars;
                this.addTransaction(this.t('bonus'), this.claimableEarnings.stars, 'STARS', true);
                this.claimableEarnings.stars = 0;
                this._dirty = true;
                this.saveUserData(false);
                this.updateHeaderBalances();
                this.showNotification('Claimed!', 'STARS rewards claimed', 'success');
                this.renderInvite();
            }
        });
    }

    // ============ MY PAGE ============
    renderMy() {
        const el = document.getElementById('my-page');
        if (!el) return;

        const selectedCurrency = this._selectedCurrency || 'gram';
        const currencies = [
            { id: 'usdt', label: 'USDT', icon: 'https://cdn-icons-png.flaticon.com/512/15207/15207964.png' },
            { id: 'gram', label: 'GRAM', icon: 'https://i.ibb.co/bgX518dY/IMG-20260622-025621-420.png' },
            { id: 'stars', label: 'STARS', icon: 'https://cdn-icons-png.flaticon.com/512/7656/7656139.png' }
        ];

        const showStarsOptions = selectedCurrency === 'stars';

        el.innerHTML = `
            <div class="promo-card glass-card">
                <div class="promo-title"><i class="fas fa-ticket-alt"></i> ${this.t('promo_code')}</div>
                <div class="promo-input-group">
                    <input type="text" id="promo-input" class="form-input" placeholder="${this.t('enter_promo')}">
                    <button class="promo-submit-btn" id="promo-submit" disabled>${this.t('claim')}</button>
                </div>
            </div>

            <div class="withdraw-card glass-card">
                <div class="withdraw-title"><i class="fas fa-arrow-up-right-from-square"></i> ${this.t('withdraw_funds')}</div>
                <div class="withdraw-options">
                    ${currencies.map(c => `
                        <div class="withdraw-option ${c.id === selectedCurrency ? 'active' : ''}" data-currency="${c.id}">
                            <img src="${c.icon}">
                            <div class="option-label">${c.label}</div>
                        </div>
                    `).join('')}
                </div>

                ${!showStarsOptions ? `
                    <div class="form-group">
                        <label class="form-label">${this.t('wallet')}</label>
                        <input type="text" id="wallet-input" class="form-input" placeholder="Enter wallet address">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${this.t('amount')}</label>
                        <div class="input-wrapper">
                            <input type="number" id="amount-input" class="form-input" step="0.00001" placeholder="0.00">
                            <button class="action-btn" id="max-btn">MAX</button>
                        </div>
                    </div>
                    <div class="withdraw-note">${this.t('min_withdraw', { min: APP_CONFIG.MINIMUM_WITHDRAW })}</div>
                    ${APP_CONFIG.WITHDRAWAL_FEES > 0 ? `<div class="withdraw-note">${this.t('withdrawal_fees_note', { fees: APP_CONFIG.WITHDRAWAL_FEES })}</div>` : ''}
                    <button class="withdraw-confirm-btn disabled" id="withdraw-btn">${this.t('confirm_withdrawal')}</button>
                ` : `
                    <div class="stars-options">
                        <div class="stars-option" data-value="15">
                            <img src="https://cdn-icons-png.flaticon.com/512/7656/7656139.png">
                            <div class="option-value">15</div>
                        </div>
                        <div class="stars-option" data-value="25">
                            <img src="https://cdn-icons-png.flaticon.com/512/7656/7656139.png">
                            <div class="option-value">25</div>
                        </div>
                        <div class="stars-option" data-value="50">
                            <img src="https://cdn-icons-png.flaticon.com/512/7656/7656139.png">
                            <div class="option-value">50</div>
                        </div>
                        <div class="stars-option" data-value="100">
                            <img src="https://cdn-icons-png.flaticon.com/512/7656/7656139.png">
                            <div class="option-value">100</div>
                        </div>
                    </div>
                    <button class="withdraw-confirm-btn" id="withdraw-stars-btn">${this.t('confirm_withdrawal')}</button>
                `}
            </div>

            <div class="section-title"><i class="fas fa-clock-rotate-left"></i> ${this.t('transactions')}</div>
            <div id="transactions-container"></div>
        `;

        // Currency selection
        el.querySelectorAll('.withdraw-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const currency = opt.dataset.currency;
                this._selectedCurrency = currency;
                this.renderMy();
            });
        });

        // Promo code
        const promoInput = document.getElementById('promo-input');
        const promoSubmit = document.getElementById('promo-submit');
        if (promoInput && promoSubmit) {
            promoInput.addEventListener('input', () => {
                promoSubmit.disabled = promoInput.value.trim() === '';
                promoSubmit.classList.toggle('active', !promoSubmit.disabled);
            });
            promoSubmit.addEventListener('click', () => {
                const code = promoInput.value.trim();
                if (code) this.applyPromoCode(code);
                promoInput.value = '';
                promoSubmit.disabled = true;
                promoSubmit.classList.remove('active');
            });
        }

        // Withdraw
        if (!showStarsOptions) {
            const walletInput = document.getElementById('wallet-input');
            const amountInput = document.getElementById('amount-input');
            const withdrawBtn = document.getElementById('withdraw-btn');
            const maxBtn = document.getElementById('max-btn');

            const checkWithdraw = () => {
                const wallet = walletInput?.value.trim();
                const amount = parseFloat(amountInput?.value);
                const balance = selectedCurrency === 'usdt' ? this.usdtBalance : this.gramBalance;
                const totalRequired = amount + (APP_CONFIG.WITHDRAWAL_FEES || 0);
                const isValid = wallet && wallet.length >= 20 && amount >= APP_CONFIG.MINIMUM_WITHDRAW && totalRequired <= balance;
                if (withdrawBtn) {
                    if (isValid) withdrawBtn.classList.remove('disabled');
                    else withdrawBtn.classList.add('disabled');
                }
            };

            maxBtn?.addEventListener('click', () => {
                if (amountInput) {
                    const balance = selectedCurrency === 'usdt' ? this.usdtBalance : this.gramBalance;
                    let maxAmount = balance - (APP_CONFIG.WITHDRAWAL_FEES || 0) - 0.00001;
                    if (maxAmount < 0) maxAmount = 0;
                    amountInput.value = maxAmount.toFixed(6);
                    checkWithdraw();
                }
            });

            walletInput?.addEventListener('input', checkWithdraw);
            amountInput?.addEventListener('input', checkWithdraw);

            withdrawBtn?.addEventListener('click', async () => {
                if (withdrawBtn.classList.contains('disabled')) return;
                const amount = parseFloat(amountInput.value);
                const wallet = walletInput.value.trim();

                if (await this.showAd()) {
                    const currency = selectedCurrency === 'usdt' ? 'USDT' : 'GRAM';
                    const totalRequired = amount + (APP_CONFIG.WITHDRAWAL_FEES || 0);

                    if (selectedCurrency === 'usdt') {
                        this.usdtBalance -= totalRequired;
                        this.addTransaction(this.t('withdrawal'), amount, 'USDT', false);
                    } else {
                        this.gramBalance -= totalRequired;
                        this.addTransaction(this.t('withdrawal'), amount, 'GRAM', false);
                    }

                    this._dirty = true;
                    this.saveUserData(false);
                    this.updateHeaderBalances();
                    this.showNotification('Withdrawal Requested', `${amount} ${currency} sent to ${wallet}`, 'success');
                    this.renderMy();
                }
            });
        } else {
            document.getElementById('withdraw-stars-btn')?.addEventListener('click', async () => {
                const selected = document.querySelector('.stars-option.active');
                if (!selected) {
                    this.showNotification('Error', 'Select an amount first', 'error');
                    return;
                }
                const amount = parseInt(selected.dataset.value);
                if (this.starsBalance < amount) {
                    this.showNotification('Error', 'Insufficient balance', 'error');
                    return;
                }
                if (await this.showAd()) {
                    this.starsBalance -= amount;
                    this.addTransaction(this.t('withdrawal'), amount, 'STARS', false);
                    this._dirty = true;
                    this.saveUserData(false);
                    this.updateHeaderBalances();
                    this.showNotification('Withdrawal Requested', `${amount} STARS withdrawn`, 'success');
                    this.renderMy();
                }
            });

            el.querySelectorAll('.stars-option').forEach(opt => {
                opt.addEventListener('click', () => {
                    el.querySelectorAll('.stars-option').forEach(o => o.classList.remove('active'));
                    opt.classList.add('active');
                });
            });
        }

        // Transactions
        const container = document.getElementById('transactions-container');
        if (container) {
            if (this.transactions.length === 0) {
                container.innerHTML = `<div class="no-data"><i class="fas fa-receipt"></i><p>${this.t('no_transactions')}</p></div>`;
            } else {
                container.innerHTML = this.transactions.map(tx => `
                    <div class="transaction-item">
                        <div class="transaction-left">
                            <i class="fas ${tx.type === this.t('withdrawal') ? 'fa-arrow-up-right-from-square' : 'fa-gift'}"></i>
                            <span class="transaction-name">${tx.type}</span>
                        </div>
                        <span class="transaction-amount ${tx.symbol === '+' ? 'positive' : 'negative'}">${tx.symbol}${tx.amount.toFixed(4)} ${tx.currency}</span>
                    </div>
                `).join('');
            }
        }
    }

    async applyPromoCode(code) {
        if (!this.db) return false;
        if (this.userCompletedPromoCodes.has(code)) {
            this.showNotification('Already Used', 'Code already redeemed', 'warning');
            return false;
        }
        const codeSnap = await this.db.ref(`promoCodes/${code}`).once('value');
        if (!codeSnap.exists()) {
            this.showNotification('Invalid Code', 'Promo code not found', 'error');
            return false;
        }
        const promoData = codeSnap.val();

        const usedRef = this.db.ref(`usedPromoCodes/${this.tgUser.id}/${code}`);
        const usedSnap = await usedRef.once('value');
        if (usedSnap.exists()) {
            this.showNotification('Already Used', 'Code already redeemed', 'warning');
            return false;
        }

        const totalUses = promoData.total || 0;
        const maxUses = promoData.maxUses;
        if (maxUses && totalUses >= maxUses) {
            this.showNotification('Expired', 'Promo code has reached maximum uses', 'warning');
            return false;
        }

        if (await this.showAd()) {
            await usedRef.set(true);
            this.userCompletedPromoCodes.add(code);

            if (promoData.rewardType === 'usdt') {
                this.usdtBalance += promoData.reward;
                this.addTransaction(this.t('bonus'), promoData.reward, 'USDT', true);
            } else if (promoData.rewardType === 'gram') {
                this.gramBalance += promoData.reward;
                this.addTransaction(this.t('bonus'), promoData.reward, 'GRAM', true);
            } else if (promoData.rewardType === 'stars') {
                this.starsBalance += promoData.reward;
                this.addTransaction(this.t('bonus'), promoData.reward, 'STARS', true);
            } else {
                this.showNotification('Error', 'Invalid reward type', 'error');
                return false;
            }

            await this.db.ref(`promoCodes/${code}/total`).set((totalUses || 0) + 1);
            this._dirty = true;
            this.saveUserData(false);
            this.updateHeaderBalances();
            this.showNotification('Code Applied!', 'Reward added to your balance', 'success');
            this.renderMy();
            return true;
        }
        return false;
    }

    // ============ NAVIGATION ============
    navigateTo(page) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(page).classList.add('active');

        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        const navMap = {
            'home-page': 0,
            'invite-page': 1,
            'my-page': 2
        };
        if (navMap[page] !== undefined) {
            document.querySelectorAll('.nav-btn')[navMap[page]]?.classList.add('active');
        }

        // Render page
        if (page === 'home-page') this.renderHome();
        else if (page === 'invite-page') this.renderInvite();
        else if (page === 'my-page') this.renderMy();
        else if (page === 'spin-page') this.renderSpinPage();
        else if (page === 'box-page') this.renderBoxPage();
        else if (page === 'tasks-page') this.renderTasksPage();
        else if (page === 'add-task-page') this.renderAddTaskPage();
    }

    // ============ SETUP ============
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.dataset.page;
                this.navigateTo(page);
            });
        });

        // Settings
        document.getElementById('settings-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            const menu = document.getElementById('settings-menu');
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
            this.updateSettingsUI();
        });

        document.addEventListener('click', (e) => {
            const menu = document.getElementById('settings-menu');
            const btn = document.getElementById('settings-btn');
            if (menu && !menu.contains(e.target) && !btn?.contains(e.target)) {
                menu.style.display = 'none';
            }
        });

        // Settings toggles
        document.getElementById('dark-mode-toggle')?.addEventListener('change', (e) => {
            this.darkMode = e.target.checked;
            this.applyTheme();
            this.saveSettings();
        });

        document.getElementById('vibration-toggle')?.addEventListener('change', (e) => {
            this.vibrationEnabled = e.target.checked;
            this.saveSettings();
        });

        document.getElementById('lang-select')?.addEventListener('change', (e) => {
            this.lang = e.target.value;
            this.saveSettings();
            this.updateHeaderBalances();
            this.renderHome();
            this.showNotification('Language', 'Changed language', 'success');
        });

        // Daily reset check
        setInterval(() => {
            const today = this.getTodayUTC();
            if (this.dailyCheckinDate !== today) {
                this.dailyCheckinClaimed = false;
            }
            if (this.invite3Date !== today) {
                this.invite3Claimed = false;
            }
            if (this.complete10Date !== today) {
                this.complete10Claimed = false;
            }
            this.dailyTasksCompleted = 0;
        }, 60000);
    }

    updateSettingsUI() {
        const darkToggle = document.getElementById('dark-mode-toggle');
        const vibToggle = document.getElementById('vibration-toggle');
        const langSelect = document.getElementById('lang-select');
        if (darkToggle) darkToggle.checked = this.darkMode;
        if (vibToggle) vibToggle.checked = this.vibrationEnabled;
        if (langSelect) langSelect.value = this.lang;
    }

    async initialize() {
        try {
            if (!window.Telegram?.WebApp) {
                throw new Error('Open from Telegram');
            }

            this.tg = window.Telegram.WebApp;
            this.tgUser = this.tg.initDataUnsafe.user;

            if (!this.tgUser) {
                throw new Error('No user data');
            }

            this.tg.ready();
            this.tg.expand();

            await this.initFirebase();
            await this.checkUserState();
            await this.checkDevice();

            await this.loadUserData();

            // Show app
            const loader = document.getElementById('app-loader');
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    const app = document.getElementById('app');
                    if (app) app.style.display = 'block';
                    this.renderHome();
                }, 500);
            }

            this.setupEventListeners();
            this.isInitialized = true;

        } catch (err) {
            console.error('Initialization error:', err);
            const loader = document.getElementById('app-loader');
            if (loader) {
                loader.innerHTML = `<div style="color:var(--error);text-align:center;padding:20px;">${err.message || 'Failed to initialize'}</div>`;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (!window.Telegram?.WebApp) {
        document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0a0a12;color:#4A7CF7">Open from Telegram Mini App</div>';
        return;
    }
    window.app = new App();
    window.app.initialize();
});
