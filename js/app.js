import { APP_CONFIG } from './data.js';

const translations = {
    en: {
        home: 'Home', games: 'Games', tasks: 'Tasks', invite: 'Invite', wallet: 'Wallet',
        watch_ad: 'Watch Reward AD',
        watch: 'Watch',
        daily_tasks: 'Daily Tasks',
        daily_checkin: 'Daily Check-in',
        invite_3_friends: 'Invite 3 Friends',
        complete_10_tasks: 'Complete 10 Tasks',
        watch_10_ads: 'Watch 10 Ads',
        claim: 'Claim',
        progress: '{current}/{total}',
        gram_snake_tasks: 'GRAM SNAKE Tasks',
        add_task: 'Add Task',
        back: 'Back',
        task_name: 'Task Name',
        task_description: 'Description (optional)',
        task_url: 'Task URL',
        verification: 'Verification',
        max_completions: 'Max Completions',
        yes: 'YES',
        no: 'NO',
        pay_stars: 'PAY {stars} GRAM',
        all_fields_required: 'Please fill all required fields',
        choose_completions: 'Choose total completions first',
        add_bot_as_admin: 'Add Bot As Admin',
        task_added: 'Task Added!',
        copy_success: 'Copied!',
        link_copied: 'Link copied to clipboard',
        invite_earn: 'Invite & Earn',
        total_earnings: 'Total Earnings',
        available_rewards: 'Available Rewards',
        withdraw_funds: 'Withdraw Funds',
        wallet_address: 'Wallet Address',
        amount: 'Amount',
        min_withdraw: 'Min. withdrawal: {min} GRAM',
        confirm_withdrawal: 'Confirm Withdrawal',
        transactions: 'Transactions',
        deposits: 'Deposits',
        withdrawals: 'Withdrawals',
        no_transactions: 'No transactions yet',
        daily_checkin_reward: 'Daily Check-in',
        task_complete: 'Task Complete',
        withdrawal: 'Withdrawal',
        bonus: 'Bonus',
        gram: 'GRAM',
        enter_promo: 'Enter promo code',
        promo_code: 'Promo Code',
        no_tasks: 'No tasks available',
        check_later: 'Check back later',
        save_error: 'Failed to save data! Please try again.',
        no_tasks_created: 'No tasks created',
        create_first_task: 'Create your first task now!',
        pending: 'PENDING',
        active: 'ACTIVE',
        completed: 'COMPLETED',
        completions: 'completions',
        task_name_placeholder: 'Enter Task Name',
        task_desc_placeholder: 'Short description (max 25 chars)',
        task_url_placeholder: 'Enter Task URL (https://t.me/..)',
        completions_100: '100',
        completions_250: '250',
        completions_500: '500',
        completions_1000: '1000',
        my_tasks: 'My Tasks',
        withdrawal_fees_note: 'Withdrawal fees: {fees} GRAM',
        available: 'Available',
        copy: 'Copy',
        total_members: 'Total Members',
        active_members: 'Active Members',
        earn_percent: 'Earn {percent}% from referrals',
        referrer_reward_notification: 'You received a bonus! Your referral completed the requirements',
        referral_bonus: 'Referral Bonus',
        new_referral: 'New Referral',
        daily_bonus_claimed: 'Already Claimed',
        no_ads: 'No ads available',
        total_referrals: 'Total Referrals',
        active_referrals: 'Active Referrals',
        invite_link: 'Invite Link',
        task_reward: 'Task Reward',
        tic_tac_toe: 'Tic-Tac-Toe',
        roll_dice: 'Roll Dice',
        lottery_game: 'Lottery Game',
        play: 'PLAY',
        spin: 'SPIN',
        ad_limit_reached: 'Daily ad limit reached',
        ad_cooldown: 'Please wait {minutes} minute(s) before watching another ad',
        dice_reward: 'Dice Reward',
        lottery_reward: 'Lottery Reward',
        deposit_funds: 'Deposit Funds',
        deposit_address: 'Deposit Address',
        deposit_memo: 'Deposit Memo',
        copy_address: 'Copy Address',
        copy_memo: 'Copy Memo',
        check_payment: 'Check Payment',
        checking: 'Checking...',
        payment_verified: 'Payment Verified!',
        payment_not_found: 'Payment not found. Please try again later.',
        invalid_memo: 'Invalid memo. Please use the memo provided.',
        deposit_success: 'Deposit successful! {amount} GRAM added.',
        memo: 'Memo',
        go: 'GO ➜',
        social_tasks: 'Social Tasks',
        partner_tasks: 'Partner Tasks',
        reward: 'Reward',
        tictactoe: 'Tic-Tac-Toe',
        dice: 'Roll Dice',
        lottery: 'Lottery',
        your_turn: 'Your Turn',
        opponent_turn: 'Opponent\'s Turn',
        play_earn: 'Play & Earn',
        play_earn_desc: 'Play games and earn GRAM and Points!',
        invite_earn_desc: 'Invite friends and earn rewards!',
        get_more_games: 'Get More Games',
        complete_tasks: 'Complete Tasks',
        games_battle: 'Games Battle',
        time_remaining: 'Time Remaining',
        updating: 'Updating',
        points: 'Points',
        games_balance: 'Games',
        task_reward_games: '+1 Game per task',
        ad_reward_games: '+1 Game per ad',
        leaderboard: 'Leaderboard',
        rank: 'Rank',
        player: 'Player',
        score: 'Score',
        your_rank: 'Your Rank',
        not_in_top: 'Not in top {count}',
        ok: 'OK',
        gram_reward: 'GRAM Reward',
        points_reward: 'Points Reward',
        no_reward: 'No Reward',
        task_preview: 'Task Preview',
        pay: 'PAY'
    },
    ru: {
        home: 'Главная', games: 'Игры', tasks: 'Задания', invite: 'Пригласить', wallet: 'Кошелек',
        watch_ad: 'Смотреть рекламу',
        watch: 'Смотреть',
        daily_tasks: 'Ежедневные задания',
        daily_checkin: 'Ежедневная проверка',
        invite_3_friends: 'Пригласить 3 друзей',
        complete_10_tasks: 'Выполнить 10 заданий',
        watch_10_ads: 'Посмотреть 10 реклам',
        claim: 'Получить',
        progress: '{current}/{total}',
        gram_snake_tasks: 'GRAM SNAKE Задания',
        add_task: 'Добавить задание',
        back: 'Назад',
        task_name: 'Название задания',
        task_description: 'Описание (опционально)',
        task_url: 'Ссылка',
        verification: 'Проверка',
        max_completions: 'Макс. выполнений',
        yes: 'ДА',
        no: 'НЕТ',
        pay_stars: 'ОПЛАТИТЬ {stars} GRAM',
        all_fields_required: 'Заполните все обязательные поля',
        choose_completions: 'Сначала выберите общее количество выполнений',
        add_bot_as_admin: 'Добавить бота администратором',
        task_added: 'Задание добавлено!',
        copy_success: 'Скопировано!',
        link_copied: 'Ссылка скопирована',
        invite_earn: 'Приглашай и зарабатывай',
        total_earnings: 'Общий заработок',
        available_rewards: 'Доступные награды',
        withdraw_funds: 'Вывод средств',
        wallet_address: 'Адрес кошелька',
        amount: 'Сумма',
        min_withdraw: 'Мин. вывод: {min} GRAM',
        confirm_withdrawal: 'Подтвердить вывод',
        transactions: 'Транзакции',
        deposits: 'Депозиты',
        withdrawals: 'Выводы',
        no_transactions: 'Пока нет транзакций',
        daily_checkin_reward: 'Ежедневная проверка',
        task_complete: 'Задание выполнено',
        withdrawal: 'Вывод',
        bonus: 'Бонус',
        gram: 'GRAM',
        enter_promo: 'Введите промокод',
        promo_code: 'Промокод',
        no_tasks: 'Нет доступных заданий',
        check_later: 'Заходите позже',
        save_error: 'Ошибка сохранения! Попробуйте снова.',
        no_tasks_created: 'Нет созданных заданий',
        create_first_task: 'Создайте свое первое задание!',
        pending: 'НА РАССМОТРЕНИИ',
        active: 'АКТИВНА',
        completed: 'ЗАВЕРШЕНА',
        completions: 'выполнений',
        task_name_placeholder: 'Введите название задания',
        task_desc_placeholder: 'Краткое описание (макс 25 символов)',
        task_url_placeholder: 'Введите URL задания (https://t.me/..)',
        completions_100: '100',
        completions_250: '250',
        completions_500: '500',
        completions_1000: '1000',
        my_tasks: 'Мои задания',
        withdrawal_fees_note: 'Комиссия за вывод: {fees} GRAM',
        available: 'Доступно',
        copy: 'Копировать',
        total_members: 'Всего участников',
        active_members: 'Активных',
        earn_percent: 'Зарабатывайте {percent}% от рефералов',
        referrer_reward_notification: 'Вы получили бонус! Ваш реферал выполнил условия',
        referral_bonus: 'Реферальный бонус',
        new_referral: 'Новый реферал',
        daily_bonus_claimed: 'Уже получено',
        no_ads: 'Нет доступной рекламы',
        total_referrals: 'Всего рефералов',
        active_referrals: 'Активных рефералов',
        invite_link: 'Ссылка для приглашения',
        task_reward: 'Награда за задание',
        tic_tac_toe: 'Крестики-нолики',
        roll_dice: 'Бросить кости',
        lottery_game: 'Лотерея',
        play: 'ИГРАТЬ',
        spin: 'SPIN',
        ad_limit_reached: 'Дневной лимит рекламы достигнут',
        ad_cooldown: 'Подождите {minutes} минут(ы) перед просмотром следующей рекламы',
        dice_reward: 'Награда за кости',
        lottery_reward: 'Награда за лотерею',
        deposit_funds: 'Пополнить средства',
        deposit_address: 'Адрес для пополнения',
        deposit_memo: 'Комментарий для пополнения',
        copy_address: 'Скопировать адрес',
        copy_memo: 'Скопировать комментарий',
        check_payment: 'Проверить платеж',
        checking: 'Проверка...',
        payment_verified: 'Платеж подтвержден!',
        payment_not_found: 'Платеж не найден. Попробуйте позже.',
        invalid_memo: 'Неверный комментарий. Используйте указанный комментарий.',
        deposit_success: 'Пополнение успешно! {amount} GRAM добавлено.',
        memo: 'Комментарий',
        go: 'ПЕРЕЙТИ ➜',
        social_tasks: 'Социальные задания',
        partner_tasks: 'Партнерские задания',
        reward: 'Награда',
        tictactoe: 'Крестики-нолики',
        dice: 'Бросить кости',
        lottery: 'Лотерея',
        your_turn: 'Ваш ход',
        opponent_turn: 'Ход противника',
        play_earn: 'Играй и зарабатывай',
        play_earn_desc: 'Играй в игры и зарабатывай GRAM и Очки!',
        invite_earn_desc: 'Приглашай друзей и получай награды!',
        get_more_games: 'Получить больше игр',
        complete_tasks: 'Выполнить задания',
        games_battle: 'Games Battle',
        time_remaining: 'Осталось времени',
        updating: 'Обновление',
        points: 'Очки',
        games_balance: 'Игры',
        task_reward_games: '+1 Игра за задание',
        ad_reward_games: '+1 Игра за рекламу',
        leaderboard: 'Таблица лидеров',
        rank: 'Место',
        player: 'Игрок',
        score: 'Очки',
        your_rank: 'Ваше место',
        not_in_top: 'Не в топ {count}',
        ok: 'ОК',
        gram_reward: 'Награда GRAM',
        points_reward: 'Награда Очки',
        no_reward: 'Нет награды',
        task_preview: 'Предпросмотр задания',
        pay: 'ОПЛАТИТЬ'
    },
    tr: {
        home: 'Ana Sayfa', games: 'Oyunlar', tasks: 'Görevler', invite: 'Davet', wallet: 'Cüzdan',
        watch_ad: 'Ödüllü Reklam İzle',
        watch: 'İzle',
        daily_tasks: 'Günlük Görevler',
        daily_checkin: 'Günlük Kontrol',
        invite_3_friends: '3 Arkadaş Davet Et',
        complete_10_tasks: '10 Görevi Tamamla',
        watch_10_ads: '10 Reklam İzle',
        claim: 'Al',
        progress: '{current}/{total}',
        gram_snake_tasks: 'GRAM SNAKE Görevler',
        add_task: 'Görev Ekle',
        back: 'Geri',
        task_name: 'Görev Adı',
        task_description: 'Açıklama (isteğe bağlı)',
        task_url: 'Bağlantı',
        verification: 'Doğrulama',
        max_completions: 'Maks. Tamamlama',
        yes: 'EVET',
        no: 'HAYIR',
        pay_stars: '{stars} GRAM ÖDE',
        all_fields_required: 'Tüm zorunlu alanları doldurun',
        choose_completions: 'Önce toplam tamamlama sayısını seçin',
        add_bot_as_admin: 'Botu Yönetici Olarak Ekle',
        task_added: 'Görev Eklendi!',
        copy_success: 'Kopyalandı!',
        link_copied: 'Bağlantı kopyalandı',
        invite_earn: 'Davet Et ve Kazan',
        total_earnings: 'Toplam Kazanç',
        available_rewards: 'Mevcut Ödüller',
        withdraw_funds: 'Para Çek',
        wallet_address: 'Cüzdan Adresi',
        amount: 'Miktar',
        min_withdraw: 'Min. çekim: {min} GRAM',
        confirm_withdrawal: 'Çekimi Onayla',
        transactions: 'İşlemler',
        deposits: 'Yatırımlar',
        withdrawals: 'Çekimler',
        no_transactions: 'İşlem yok',
        daily_checkin_reward: 'Günlük Kontrol',
        task_complete: 'Görev Tamamlandı',
        withdrawal: 'Para Çekme',
        bonus: 'Bonus',
        gram: 'GRAM',
        enter_promo: 'Promosyon kodunu girin',
        promo_code: 'Promosyon Kodu',
        no_tasks: 'Görev yok',
        check_later: 'Daha sonra kontrol edin',
        save_error: 'Veri kaydedilemedi! Lütfen tekrar deneyin.',
        no_tasks_created: 'Görev oluşturulmadı',
        create_first_task: 'Şimdi ilk görevinizi oluşturun!',
        pending: 'BEKLEMEDE',
        active: 'AKTİF',
        completed: 'TAMAMLANDI',
        completions: 'tamamlama',
        task_name_placeholder: 'Görev Adını Girin',
        task_desc_placeholder: 'Kısa açıklama (max 25 karakter)',
        task_url_placeholder: 'Görev URL\'sini Girin (https://t.me/..)',
        completions_100: '100',
        completions_250: '250',
        completions_500: '500',
        completions_1000: '1000',
        my_tasks: 'Görevlerim',
        withdrawal_fees_note: 'Çekim ücreti: {fees} GRAM',
        available: 'Mevcut',
        copy: 'Kopyala',
        total_members: 'Toplam Üye',
        active_members: 'Aktif Üyeler',
        earn_percent: 'Referanslardan %{percent} kazanın',
        referrer_reward_notification: 'Bonus kazandınız! Referansınız koşulları tamamladı',
        referral_bonus: 'Referans Bonusu',
        new_referral: 'Yeni Referans',
        daily_bonus_claimed: 'Zaten Alındı',
        no_ads: 'Reklam yok',
        total_referrals: 'Toplam Referans',
        active_referrals: 'Aktif Referanslar',
        invite_link: 'Davet Bağlantısı',
        task_reward: 'Görev Ödülü',
        tic_tac_toe: 'X-O Oyunu',
        roll_dice: 'Zar At',
        lottery_game: 'Piyango',
        play: 'OYNA',
        spin: 'SPIN',
        ad_limit_reached: 'Günlük reklam limiti aşıldı',
        ad_cooldown: 'Lütfen bir sonraki reklam için {minutes} dakika bekleyin',
        dice_reward: 'Zar Ödülü',
        lottery_reward: 'Piyango Ödülü',
        deposit_funds: 'Para Yatır',
        deposit_address: 'Yatırma Adresi',
        deposit_memo: 'Yatırma Açıklaması',
        copy_address: 'Adresi Kopyala',
        copy_memo: 'Açıklamayı Kopyala',
        check_payment: 'Ödemeyi Kontrol Et',
        checking: 'Kontrol Ediliyor...',
        payment_verified: 'Ödeme Doğrulandı!',
        payment_not_found: 'Ödeme bulunamadı. Lütfen daha sonra tekrar deneyin.',
        invalid_memo: 'Geçersiz açıklama. Lütfen belirtilen açıklamayı kullanın.',
        deposit_success: 'Yatırım başarılı! {amount} GRAM eklendi.',
        memo: 'Açıklama',
        go: 'GİT ➜',
        social_tasks: 'Sosyal Görevler',
        partner_tasks: 'Ortak Görevler',
        reward: 'Ödül',
        tictactoe: 'X-O Oyunu',
        dice: 'Zar At',
        lottery: 'Piyango',
        your_turn: 'Sıra Sende',
        opponent_turn: 'Rakibin Sırası',
        play_earn: 'Oyna ve Kazan',
        play_earn_desc: 'Oyun oyna ve GRAM ve Puan kazan!',
        invite_earn_desc: 'Arkadaşlarını davet et ve ödüller kazan!',
        get_more_games: 'Daha Fazla Oyun Al',
        complete_tasks: 'Görevleri Tamamla',
        games_battle: 'Games Battle',
        time_remaining: 'Kalan Süre',
        updating: 'Güncelleniyor',
        points: 'Puan',
        games_balance: 'Oyunlar',
        task_reward_games: 'Görev başına +1 Oyun',
        ad_reward_games: 'Reklam başına +1 Oyun',
        leaderboard: 'Sıralama',
        rank: 'Sıra',
        player: 'Oyuncu',
        score: 'Puan',
        your_rank: 'Sıralaman',
        not_in_top: 'İlk {count} içinde değil',
        ok: 'TAMAM',
        gram_reward: 'GRAM Ödülü',
        points_reward: 'Puan Ödülü',
        no_reward: 'Ödül Yok',
        task_preview: 'Görev Önizleme',
        pay: 'ÖDE'
    },
    ar: {
        home: 'الرئيسية', games: 'الألعاب', tasks: 'المهام', invite: 'دعوة', wallet: 'المحفظة',
        watch_ad: 'مشاهدة إعلان',
        watch: 'مشاهدة',
        daily_tasks: 'المهام اليومية',
        daily_checkin: 'تسجيل الدخول اليومي',
        invite_3_friends: 'دعوة 3 أصدقاء',
        complete_10_tasks: 'إكمال 10 مهام',
        watch_10_ads: 'مشاهدة 10 إعلانات',
        claim: 'استلام',
        progress: '{current}/{total}',
        gram_snake_tasks: 'مهام GRAM SNAKE',
        add_task: 'إضافة مهمة',
        back: 'رجوع',
        task_name: 'اسم المهمة',
        task_description: 'الوصف (اختياري)',
        task_url: 'الرابط',
        verification: 'التحقق',
        max_completions: 'الحد الأقصى للإكمال',
        yes: 'نعم',
        no: 'لا',
        pay_stars: 'ادفع {stars} GRAM',
        all_fields_required: 'الرجاء ملء جميع الحقول المطلوبة',
        choose_completions: 'اختر العدد الإجمالي للإكمال أولاً',
        add_bot_as_admin: 'إضافة البوت كمدير',
        task_added: 'تمت إضافة المهمة!',
        copy_success: 'تم النسخ!',
        link_copied: 'تم نسخ الرابط',
        invite_earn: 'دعوة واربح',
        total_earnings: 'إجمالي الأرباح',
        available_rewards: 'المكافآت المتاحة',
        withdraw_funds: 'سحب الأموال',
        wallet_address: 'عنوان المحفظة',
        amount: 'المبلغ',
        min_withdraw: 'الحد الأدنى للسحب: {min} GRAM',
        confirm_withdrawal: 'تأكيد السحب',
        transactions: 'المعاملات',
        deposits: 'الإيداعات',
        withdrawals: 'السحوبات',
        no_transactions: 'لا توجد معاملات بعد',
        daily_checkin_reward: 'تسجيل الدخول اليومي',
        task_complete: 'اكتملت المهمة',
        withdrawal: 'سحب',
        bonus: 'مكافأة',
        gram: 'GRAM',
        enter_promo: 'أدخل الرمز الترويجي',
        promo_code: 'الرمز الترويجي',
        no_tasks: 'لا توجد مهام متاحة',
        check_later: 'تحقق لاحقاً',
        save_error: 'فشل حفظ البيانات! حاول مرة أخرى.',
        no_tasks_created: 'لا توجد مهام منشأة',
        create_first_task: 'أنشئ مهمتك الأولى الآن!',
        pending: 'قيد المراجعة',
        active: 'نشطة',
        completed: 'مكتملة',
        completions: 'إكمال',
        task_name_placeholder: 'أدخل اسم المهمة',
        task_desc_placeholder: 'وصف قصير (حد أقصى 25 حرف)',
        task_url_placeholder: 'أدخل رابط المهمة (https://t.me/..)',
        completions_100: '100',
        completions_250: '250',
        completions_500: '500',
        completions_1000: '1000',
        my_tasks: 'مهامي',
        withdrawal_fees_note: 'رسوم السحب: {fees} GRAM',
        available: 'متوفر',
        copy: 'نسخ',
        total_members: 'إجمالي الأعضاء',
        active_members: 'الأعضاء النشطاء',
        earn_percent: 'اربح {percent}% من الإحالات',
        referrer_reward_notification: 'لقد تلقيت مكافأة! أكمل المحال الخاص بك المتطلبات',
        referral_bonus: 'مكافأة الإحالة',
        new_referral: 'إحالة جديدة',
        daily_bonus_claimed: 'تم الاستلام بالفعل',
        no_ads: 'لا توجد إعلانات',
        total_referrals: 'إجمالي الإحالات',
        active_referrals: 'الإحالات النشطة',
        invite_link: 'رابط الدعوة',
        task_reward: 'مكافأة المهمة',
        tic_tac_toe: 'إكس-أو',
        roll_dice: 'رمي النرد',
        lottery_game: 'اليانصيب',
        play: 'لعب',
        spin: 'SPIN',
        ad_limit_reached: 'تم الوصول إلى الحد اليومي للإعلانات',
        ad_cooldown: 'يرجى الانتظار {minutes} دقيقة(ق) قبل مشاهدة إعلان آخر',
        dice_reward: 'مكافأة النرد',
        lottery_reward: 'مكافأة اليانصيب',
        deposit_funds: 'إيداع الأموال',
        deposit_address: 'عنوان الإيداع',
        deposit_memo: 'مذكرة الإيداع',
        copy_address: 'نسخ العنوان',
        copy_memo: 'نسخ المذكرة',
        check_payment: 'التحقق من الدفع',
        checking: 'جاري التحقق...',
        payment_verified: 'تم التحقق من الدفع!',
        payment_not_found: 'لم يتم العثور على الدفع. يرجى المحاولة مرة أخرى لاحقاً.',
        invalid_memo: 'مذكرة غير صالحة. يرجى استخدام المذكرة المقدمة.',
        deposit_success: 'تم الإيداع بنجاح! تمت إضافة {amount} GRAM.',
        memo: 'المذكرة',
        go: 'اذهب ➜',
        social_tasks: 'المهام الاجتماعية',
        partner_tasks: 'مهام الشركاء',
        reward: 'المكافأة',
        tictactoe: 'إكس-أو',
        dice: 'رمي النرد',
        lottery: 'اليانصيب',
        your_turn: 'دورك',
        opponent_turn: 'دور الخصم',
        play_earn: 'العب واربح',
        play_earn_desc: 'العب الألعاب واربح GRAM ونقاط!',
        invite_earn_desc: 'ادعُ أصدقائك واربح المكافآت!',
        get_more_games: 'احصل على المزيد من الألعاب',
        complete_tasks: 'أكمل المهام',
        games_battle: 'Games Battle',
        time_remaining: 'الوقت المتبقي',
        updating: 'تحديث',
        points: 'نقاط',
        games_balance: 'ألعاب',
        task_reward_games: '+1 لعبة لكل مهمة',
        ad_reward_games: '+1 لعبة لكل إعلان',
        leaderboard: 'لوحة المتصدرين',
        rank: 'الترتيب',
        player: 'اللاعب',
        score: 'النقاط',
        your_rank: 'ترتيبك',
        not_in_top: 'ليس في أفضل {count}',
        ok: 'حسناً',
        gram_reward: 'مكافأة GRAM',
        points_reward: 'مكافأة النقاط',
        no_reward: 'لا توجد مكافأة',
        task_preview: 'معاينة المهمة',
        pay: 'ادفع'
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

        this.gramBalance = 0;
        this.gamesBalance = 0;
        this.pointsBalance = 0;

        this.dailyCheckinClaimed = false;
        this.dailyCheckinDate = null;
        this.invite3Claimed = false;
        this.invite3Date = null;
        this.complete10Claimed = false;
        this.complete10Date = null;
        this.watch10AdsClaimed = false;
        this.watch10AdsDate = null;
        this.dailyTasksCompleted = 0;

        this.totalReferrals = 0;
        this.activeReferrals = 0;
        this.referralEarnings = { gram: 0 };
        this.claimableEarnings = { gram: 0 };
        this.totalEarnings = { gram: 0 };

        this.deposits = [];
        this.withdrawals = [];
        this.userTasks = [];
        this.completedTasks = new Set();
        this.completedSocialTasks = new Map();
        this.userCompletedPromoCodes = new Set();

        this.lang = 'en';
        this.vibrationEnabled = true;
        this.darkMode = true;

        this.isTaskRunning = false;
        this.membershipCache = new Map();

        this.adCount = 0;
        this.adCountDate = null;
        this.adCooldown = 0;

        this.depositMemo = null;
        this.pendingDepositCheck = false;
        this.pendingPaymentInterval = null;

        this.leaderboardData = [];
        this.leaderboardLastUpdate = 0;
        this.leaderboardTimerInterval = null;

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
        const iconMap = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-triangle-exclamation',
            info: 'fa-circle-info'
        };
        const icon = iconMap[type] || iconMap.info;
        el.innerHTML = `
            <div class="notif-icon"><i class="fas ${icon}"></i></div>
            <div class="notif-content">
                <div class="notif-title">${title}</div>
                <div class="notif-message">${message}</div>
            </div>
        `;
        document.body.appendChild(el);
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateX(-50%) translateY(-20px)';
            setTimeout(() => el.remove(), 300);
        }, 3000);
    }

    async showAd() {
        try {
            const AdController = window.Adsgram.init({ blockId: APP_CONFIG.INTERSTITIAL_AD_BLOCK_ID });
            await AdController.show();
            
            const today = this.getTodayUTC();
            if (this.adCountDate !== today) {
                this.adCountDate = today;
                this.adCount = 0;
                this.adCooldown = 0;
            }
            
            const limit = APP_CONFIG.AD_LIMITS.dailyLimit || 30;
            if (this.adCount >= limit) {
                this.showNotification('Error', this.t('ad_limit_reached'), 'warning');
                return false;
            }
            
            const cooldownMinutes = APP_CONFIG.AD_LIMITS.cooldownMinutes || 1;
            const lastAdTime = parseInt(localStorage.getItem('ad_cooldown_time') || '0');
            const elapsed = (Date.now() - lastAdTime) / 60000;
            if (elapsed < cooldownMinutes) {
                const remaining = Math.ceil(cooldownMinutes - elapsed);
                this.showNotification('Error', this.t('ad_cooldown', { minutes: remaining }), 'warning');
                return false;
            }
            
            this.adCount++;
            localStorage.setItem('ad_cooldown_time', Date.now().toString());
            
            this._dirty = true;
            await this.saveUserData(false);
            
            return true;
        } catch (e) {
            this.showNotification('Error', this.t('no_ads'), 'warning');
            return false;
        }
    }

    updateHeaderBalances() {
        const gramEl = document.getElementById('gram-balance');
        const gamesEl = document.getElementById('games-balance');
        if (gramEl) gramEl.textContent = this.gramBalance.toFixed(4);
        if (gamesEl) gamesEl.textContent = this.gamesBalance;
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
                gramBalance: this.gramBalance,
                gamesBalance: this.gamesBalance,
                pointsBalance: this.pointsBalance,
                dailyCheckinClaimed: this.dailyCheckinClaimed,
                dailyCheckinDate: this.dailyCheckinDate,
                invite3Claimed: this.invite3Claimed,
                invite3Date: this.invite3Date,
                complete10Claimed: this.complete10Claimed,
                complete10Date: this.complete10Date,
                watch10AdsClaimed: this.watch10AdsClaimed,
                watch10AdsDate: this.watch10AdsDate,
                dailyTasksCompleted: this.dailyTasksCompleted,
                totalReferrals: this.totalReferrals,
                activeReferrals: this.activeReferrals,
                referralEarnings: this.referralEarnings,
                claimableEarnings: this.claimableEarnings,
                totalEarnings: this.totalEarnings,
                adCount: this.adCount,
                adCountDate: this.adCountDate
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
            gramBalance: 0,
            gamesBalance: 0,
            pointsBalance: 0,
            dailyCheckinClaimed: false,
            dailyCheckinDate: null,
            invite3Claimed: false,
            invite3Date: null,
            complete10Claimed: false,
            complete10Date: null,
            watch10AdsClaimed: false,
            watch10AdsDate: null,
            dailyTasksCompleted: 0,
            totalReferrals: 0,
            activeReferrals: 0,
            referralEarnings: { gram: 0 },
            claimableEarnings: { gram: 0 },
            totalEarnings: { gram: 0 },
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

        this.gramBalance = 0;
        this.gamesBalance = 0;
        this.pointsBalance = 0;
        this.dailyCheckinClaimed = false;
        this.dailyCheckinDate = null;
        this.invite3Claimed = false;
        this.invite3Date = null;
        this.complete10Claimed = false;
        this.complete10Date = null;
        this.watch10AdsClaimed = false;
        this.watch10AdsDate = null;
        this.dailyTasksCompleted = 0;
        this.totalReferrals = 0;
        this.activeReferrals = 0;
        this.referralEarnings = { gram: 0 };
        this.claimableEarnings = { gram: 0 };
        this.totalEarnings = { gram: 0 };
        this.deposits = [];
        this.withdrawals = [];

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
            this.gramBalance = data.gramBalance ?? 0;
            this.gamesBalance = data.gamesBalance ?? 0;
            this.pointsBalance = data.pointsBalance ?? 0;
            this.dailyCheckinClaimed = data.dailyCheckinClaimed ?? false;
            this.dailyCheckinDate = data.dailyCheckinDate ?? null;
            this.invite3Claimed = data.invite3Claimed ?? false;
            this.invite3Date = data.invite3Date ?? null;
            this.complete10Claimed = data.complete10Claimed ?? false;
            this.complete10Date = data.complete10Date ?? null;
            this.watch10AdsClaimed = data.watch10AdsClaimed ?? false;
            this.watch10AdsDate = data.watch10AdsDate ?? null;
            this.dailyTasksCompleted = data.dailyTasksCompleted ?? 0;
            this.totalReferrals = data.totalReferrals ?? 0;
            this.activeReferrals = data.activeReferrals ?? 0;
            this.referralEarnings = data.referralEarnings ?? { gram: 0 };
            this.claimableEarnings = data.claimableEarnings ?? { gram: 0 };
            this.totalEarnings = data.totalEarnings ?? { gram: 0 };
            this.adCount = data.adCount ?? 0;
            this.adCountDate = data.adCountDate ?? null;
        }

        try {
            const userRef = this.db.ref(`users/${this.tgUser.id}`);
            const snap = await userRef.once('value');
            if (snap.exists()) {
                const d = snap.val();
                this.gramBalance = d.gramBalance ?? this.gramBalance;
                this.gamesBalance = d.gamesBalance ?? this.gamesBalance;
                this.pointsBalance = d.pointsBalance ?? this.pointsBalance;
                this.dailyCheckinClaimed = d.dailyCheckinClaimed ?? false;
                this.dailyCheckinDate = d.dailyCheckinDate ?? null;
                this.invite3Claimed = d.invite3Claimed ?? false;
                this.invite3Date = d.invite3Date ?? null;
                this.complete10Claimed = d.complete10Claimed ?? false;
                this.complete10Date = d.complete10Date ?? null;
                this.watch10AdsClaimed = d.watch10AdsClaimed ?? false;
                this.watch10AdsDate = d.watch10AdsDate ?? null;
                this.dailyTasksCompleted = d.dailyTasksCompleted ?? 0;
                this.totalReferrals = d.totalReferrals ?? 0;
                this.activeReferrals = d.activeReferrals ?? 0;
                this.referralEarnings = d.referralEarnings ?? { gram: 0 };
                this.claimableEarnings = d.claimableEarnings ?? { gram: 0 };
                this.totalEarnings = d.totalEarnings ?? { gram: 0 };
                this.adCount = d.adCount ?? 0;
                this.adCountDate = d.adCountDate ?? null;

                const userDataForCache = {
                    gramBalance: this.gramBalance,
                    gamesBalance: this.gamesBalance,
                    pointsBalance: this.pointsBalance,
                    dailyCheckinClaimed: this.dailyCheckinClaimed,
                    dailyCheckinDate: this.dailyCheckinDate,
                    invite3Claimed: this.invite3Claimed,
                    invite3Date: this.invite3Date,
                    complete10Claimed: this.complete10Claimed,
                    complete10Date: this.complete10Date,
                    watch10AdsClaimed: this.watch10AdsClaimed,
                    watch10AdsDate: this.watch10AdsDate,
                    dailyTasksCompleted: this.dailyTasksCompleted,
                    totalReferrals: this.totalReferrals,
                    activeReferrals: this.activeReferrals,
                    referralEarnings: this.referralEarnings,
                    claimableEarnings: this.claimableEarnings,
                    totalEarnings: this.totalEarnings,
                    adCount: this.adCount,
                    adCountDate: this.adCountDate
                };
                localStorage.setItem(`gram_snake_user_${this.tgUser.id}`, JSON.stringify(userDataForCache));
            } else {
                await this.forceCreateUserData();
            }
        } catch (error) {
            console.error('loadUserData error:', error);
            await this.forceCreateUserData();
        }

        const today = this.getTodayUTC();
        if (this.adCountDate !== today) {
            this.adCountDate = today;
            this.adCount = 0;
        }

        const nameSpan = document.getElementById('user-name');
        if (nameSpan) nameSpan.innerText = this.truncateName(this.tgUser.first_name || 'User');
        const photoImg = document.getElementById('user-photo');
        if (photoImg) photoImg.src = this.tgUser.photo_url || APP_CONFIG.DEFAULT_USER_AVATAR;

        this.updateHeaderBalances();
        await this.loadDepositsWithdrawals();
        await this.loadCompletedTasks();
        await this.loadUserTasks();
        await this.loadSocialTasks();
        await this.loadLeaderboard();
        this.startLeaderboardTimer();
    }

    async loadDepositsWithdrawals() {
        const saved = localStorage.getItem(`gram_snake_deposits_${this.tgUser?.id}`);
        if (saved) {
            this.deposits = JSON.parse(saved);
        } else {
            this.deposits = [];
        }
        const savedWith = localStorage.getItem(`gram_snake_withdrawals_${this.tgUser?.id}`);
        if (savedWith) {
            this.withdrawals = JSON.parse(savedWith);
        } else {
            this.withdrawals = [];
        }
    }

    saveDepositsWithdrawals() {
        localStorage.setItem(`gram_snake_deposits_${this.tgUser?.id}`, JSON.stringify(this.deposits));
        localStorage.setItem(`gram_snake_withdrawals_${this.tgUser?.id}`, JSON.stringify(this.withdrawals));
    }

    addDeposit(amount, currency, memo, txId) {
        this.deposits.unshift({
            id: Date.now(),
            amount: amount,
            currency: currency,
            memo: memo,
            txId: txId,
            timestamp: Date.now()
        });
        if (this.deposits.length > 50) this.deposits = this.deposits.slice(0, 50);
        this.saveDepositsWithdrawals();
    }

    addWithdrawal(amount, currency, address) {
        this.withdrawals.unshift({
            id: Date.now(),
            amount: amount,
            currency: currency,
            address: address,
            timestamp: Date.now()
        });
        if (this.withdrawals.length > 50) this.withdrawals = this.withdrawals.slice(0, 50);
        this.saveDepositsWithdrawals();
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

    async loadPartnerTasks() {
        if (!this.db) return [];
        try {
            const snap = await this.db.ref('partnerTasks').once('value');
            if (snap.exists()) {
                const tasks = [];
                snap.forEach(child => {
                    tasks.push({ id: child.key, ...child.val() });
                });
                return tasks;
            }
        } catch (error) {
            console.warn('Failed to load partner tasks:', error);
        }
        return [];
    }

    async loadLeaderboard() {
        try {
            const snap = await this.db.ref('leaderboard').orderByChild('points').limitToLast(100).once('value');
            if (snap.exists()) {
                const data = [];
                snap.forEach(child => {
                    data.push({ id: child.key, ...child.val() });
                });
                this.leaderboardData = data.sort((a, b) => (b.points || 0) - (a.points || 0));
                this.leaderboardLastUpdate = Date.now();
            }
        } catch (error) {
            console.warn('Failed to load leaderboard:', error);
        }
    }

    startLeaderboardTimer() {
        if (this.leaderboardTimerInterval) clearInterval(this.leaderboardTimerInterval);
        this.leaderboardTimerInterval = setInterval(() => {
            this.updateLeaderboardTimer();
        }, 1000);
    }

    updateLeaderboardTimer() {
        const timerEl = document.getElementById('leaderboard-timer');
        if (!timerEl) return;
        
        const now = Date.now();
        const endOfDay = new Date();
        endOfDay.setUTCHours(24, 0, 0, 0);
        const remaining = endOfDay.getTime() - now;
        
        if (remaining <= 0) {
            timerEl.textContent = this.t('updating') + '...';
            this.updateLeaderboardData();
            return;
        }
        
        const hours = Math.floor(remaining / 3600000);
        const minutes = Math.floor((remaining % 3600000) / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        timerEl.textContent = `${hours}h ${minutes}m ${seconds}s`;
    }

    async updateLeaderboardData() {
        await this.loadLeaderboard();
        this.renderGamesPage();
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

    async verifyTonPayment(taskId, expectedAmount, name, url, verification, maxCompletions, description) {
        const savedTaskId = localStorage.getItem('pending_task_id');
        const searchId = taskId || savedTaskId;
        const walletAddress = APP_CONFIG.TON_WALLET_ADDRESS;
        
        this.showNotification('Payment Verification', 'Checking blockchain for your payment...', 'info');
        
        if (this.pendingPaymentInterval) clearInterval(this.pendingPaymentInterval);
        
        let attempts = 0;
        const maxAttempts = 5;
        
        this.pendingPaymentInterval = setInterval(async () => {
            attempts++;
            this.showNotification('Verifying', `Attempt ${attempts}/${maxAttempts}...`, 'info');
            
            try {
                const response = await fetch(`https://toncenter.com/api/v2/getTransactions?address=${walletAddress}&limit=20`);
                const data = await response.json();
                
                if (!data.ok) {
                    this.showNotification('API Error', 'Failed to fetch transactions. Retrying...', 'warning');
                    return;
                }
                
                if (data.result && data.result.length > 0) {
                    const found = data.result.find(tx => {
                        const msg = tx.in_msg?.message;
                        const value = tx.in_msg?.value;
                        const expectedValue = localStorage.getItem('pending_task_amount') || expectedAmount;
                        return msg && msg.includes(searchId) && parseFloat(value) >= parseFloat(expectedValue);
                    });
                    
                    if (found) {
                        clearInterval(this.pendingPaymentInterval);
                        this.pendingPaymentInterval = null;
                        
                        const savedData = JSON.parse(localStorage.getItem('pending_task_data') || '{}');
                        const finalName = name || savedData.name;
                        const finalUrl = url || savedData.url;
                        const finalVerification = verification || savedData.verification;
                        const finalMaxCompletions = maxCompletions || savedData.maxCompletions;
                        const finalDescription = description || savedData.description || '';
                        const finalTaskId = searchId;
                        
                        localStorage.removeItem('pending_task_id');
                        localStorage.removeItem('pending_task_amount');
                        localStorage.removeItem('pending_task_data');
                        
                        this.showNotification('Success', 'Payment verified! Creating task...', 'success');
                        await this.createTaskAfterPayment(finalName, finalUrl, finalVerification, finalMaxCompletions, finalTaskId, finalDescription);
                    } else if (attempts >= maxAttempts) {
                        clearInterval(this.pendingPaymentInterval);
                        this.pendingPaymentInterval = null;
                        this.showNotification('Not Found', 'Payment not found. Did you complete the transaction?', 'warning');
                    }
                }
            } catch (error) {
                this.showNotification('Connection Error', 'Cannot connect to blockchain. Retrying...', 'error');
                console.log('Verification error:', error);
            }
        }, 5000);
        
        setTimeout(() => {
            if (this.pendingPaymentInterval) {
                clearInterval(this.pendingPaymentInterval);
                this.pendingPaymentInterval = null;
                this.showNotification('Timeout', 'Verification timeout.', 'warning');
                localStorage.removeItem('pending_task_id');
                localStorage.removeItem('pending_task_amount');
                localStorage.removeItem('pending_task_data');
            }
        }, 60000);
    }

    async createTaskAfterPayment(name, url, verification, maxCompletions, taskId, description) {
        try {
            const taskData = {
                name: name,
                url: url,
                description: description || '',
                category: 'social',
                verification: verification === 'true',
                max: maxCompletions,
                status: 'active',
                owner: this.tgUser.id,
                createdAt: Date.now(),
                total: 0
            };

            await this.db.ref(`userTasks/${this.tgUser.id}/${taskId}`).set(taskData);
            this._dirty = true;
            this.saveUserData(false);
            this.showNotification('Success', this.t('task_added'), 'success');
            await this.loadUserTasks();
            this.renderMyTasks();
            this.renderAddTaskPage();
        } catch (error) {
            this.showNotification('Error', 'Failed to create task: ' + error.message, 'error');
        }
    }

    async createTonConnectPayment(amount, taskId, name, url, verification, maxCompletions, description) {
        try {
            const amountNano = Math.round(amount * 1000000000);
            const amountNanoStr = amountNano.toString();

            localStorage.setItem('pending_task_amount', amountNanoStr);
            localStorage.setItem('pending_task_data', JSON.stringify({ name, url, verification, maxCompletions, description }));
            
            const walletAddress = APP_CONFIG.TON_WALLET_ADDRESS;
            const tonkeeperUrl = `https://app.tonkeeper.com/transfer/${walletAddress}?amount=${amountNanoStr}&text=${taskId}`;
            
            this.showNotification('Payment Required', `Please send ${amount} GRAM to complete your task`, 'info');
            
            window.open(tonkeeperUrl, '_blank');
            
            return true;
        } catch (error) {
            this.showNotification('Error', error.message, 'error');
            return false;
        }
    }

    renderHome() {
        const el = document.getElementById('home-page');
        if (!el) return;

        const today = this.getTodayUTC();
        const dailyCheckinDone = this.dailyCheckinClaimed && this.dailyCheckinDate === today;
        const invite3Done = this.invite3Claimed && this.invite3Date === today;
        const complete10Done = this.complete10Claimed && this.complete10Date === today;
        const watch10AdsDone = this.watch10AdsClaimed && this.watch10AdsDate === today;

        const invite3Progress = this.totalReferrals >= 3 ? 3 : this.totalReferrals;
        const complete10Progress = Math.min(this.dailyTasksCompleted, 10);
        const totalAdsWatched = this.adCount;

        el.innerHTML = `
            <div class="promo-card glass-card">
                <div class="promo-title"><i class="fas fa-ticket-alt"></i> ${this.t('promo_code')}</div>
                <div class="promo-input-group">
                    <input type="text" id="promo-input" class="form-input" placeholder="${this.t('enter_promo')}">
                    <button class="promo-submit-btn" id="promo-submit" disabled>${this.t('claim')}</button>
                </div>
            </div>

            <div class="section-title">
                <span class="icon-circle"><i class="fas fa-calendar-day"></i></span>
                ${this.t('daily_tasks')}
            </div>

            <div class="daily-task-card glass-card">
                <div class="daily-task-left">
                    <span class="icon-circle-small"><i class="fas fa-calendar-check"></i></span>
                    <div class="daily-task-info">
                        <h4>${this.t('daily_checkin')}</h4>
                        <div class="task-reward"><img src="${APP_CONFIG.ICONS.GRAM}"> 0.001 GRAM</div>
                    </div>
                </div>
                <button class="daily-task-btn ${dailyCheckinDone ? 'done' : 'primary'}" id="daily-checkin-btn">${dailyCheckinDone ? this.t('claim') : this.t('claim')}</button>
            </div>

            <div class="daily-task-card glass-card">
                <div class="daily-task-left">
                    <span class="icon-circle-small"><i class="fas fa-user-plus"></i></span>
                    <div class="daily-task-info">
                        <h4>${this.t('invite_3_friends')}</h4>
                        <div class="task-reward"><img src="${APP_CONFIG.ICONS.GRAM}"> 0.003 GRAM</div>
                        <div class="task-progress-text">${invite3Progress}/3</div>
                    </div>
                </div>
                <button class="daily-task-btn ${invite3Done ? 'done' : (this.totalReferrals >= 3 ? 'primary' : 'progress')}" id="invite3-btn">${invite3Done ? this.t('claim') : (this.totalReferrals >= 3 ? this.t('claim') : this.t('go'))}</button>
            </div>

            <div class="daily-task-card glass-card">
                <div class="daily-task-left">
                    <span class="icon-circle-small"><i class="fas fa-check-double"></i></span>
                    <div class="daily-task-info">
                        <h4>${this.t('complete_10_tasks')}</h4>
                        <div class="task-reward"><img src="${APP_CONFIG.ICONS.GRAM}"> 0.002 GRAM</div>
                        <div class="task-progress-text">${this.dailyTasksCompleted}/10</div>
                    </div>
                </div>
                <button class="daily-task-btn ${complete10Done ? 'done' : (this.dailyTasksCompleted >= 10 ? 'primary' : 'progress')}" id="complete10-btn">${complete10Done ? this.t('claim') : (this.dailyTasksCompleted >= 10 ? this.t('claim') : this.t('go'))}</button>
            </div>

            <div class="daily-task-card glass-card">
                <div class="daily-task-left">
                    <span class="icon-circle-small"><i class="fas fa-play"></i></span>
                    <div class="daily-task-info">
                        <h4>${this.t('watch_10_ads')}</h4>
                        <div class="task-reward"><img src="${APP_CONFIG.ICONS.GRAM}"> 0.001 GRAM</div>
                        <div class="task-progress-text">${totalAdsWatched}/10</div>
                    </div>
                </div>
                <button class="daily-task-btn ${watch10AdsDone ? 'done' : (totalAdsWatched >= 10 ? 'primary' : 'progress')}" id="watch10ads-btn">${watch10AdsDone ? this.t('claim') : (totalAdsWatched >= 10 ? this.t('claim') : this.t('go'))}</button>
            </div>

            <div class="feature-card" id="play-earn-card">
                <div class="feature-icon">🎮</div>
                <div class="feature-title">${this.t('play_earn')}</div>
                <div class="feature-desc">${this.t('play_earn_desc')}</div>
                <button class="feature-btn" id="play-earn-btn">${this.t('go')}</button>
            </div>

            <div class="feature-card" id="invite-earn-card">
                <div class="feature-icon">👥</div>
                <div class="feature-title">${this.t('invite_earn')}</div>
                <div class="feature-desc">${this.t('invite_earn_desc')}</div>
                <button class="feature-btn" id="invite-earn-btn">${this.t('go')}</button>
            </div>
        `;

        document.getElementById('play-earn-btn')?.addEventListener('click', () => {
            this.navigateTo('games-page');
        });

        document.getElementById('invite-earn-btn')?.addEventListener('click', () => {
            this.navigateTo('invite-page');
        });

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
                this.navigateTo('invite-page');
                return;
            }
            if (await this.showAd()) {
                this.gramBalance += 0.003;
                this.invite3Claimed = true;
                this.invite3Date = today;
                this._dirty = true;
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
                this.navigateTo('tasks-page');
                return;
            }
            if (await this.showAd()) {
                this.gramBalance += 0.002;
                this.complete10Claimed = true;
                this.complete10Date = today;
                this._dirty = true;
                this.saveUserData(false);
                this.updateHeaderBalances();
                this.showNotification('+0.002 GRAM', 'Complete 10 tasks reward claimed!', 'success');
                this.renderHome();
            }
        });

        document.getElementById('watch10ads-btn')?.addEventListener('click', async () => {
            if (this.watch10AdsClaimed && this.watch10AdsDate === today) {
                this.showNotification('Info', this.t('daily_bonus_claimed'), 'warning');
                return;
            }
            if (totalAdsWatched < 10) {
                this.showNotification('Info', 'Watch 10 ads first!', 'warning');
                return;
            }
            if (await this.showAd()) {
                this.gramBalance += 0.001;
                this.watch10AdsClaimed = true;
                this.watch10AdsDate = today;
                this._dirty = true;
                this.saveUserData(false);
                this.updateHeaderBalances();
                this.showNotification('+0.001 GRAM', 'Watch 10 ads reward claimed!', 'success');
                this.renderHome();
            }
        });
    }

    renderGamesPage() {
        const el = document.getElementById('games-page');
        if (!el) return;

        const today = this.getTodayUTC();
        const adCount = this.adCountDate === today ? this.adCount : 0;
        const limit = APP_CONFIG.AD_LIMITS.dailyLimit || 30;
        const adsLeft = Math.max(0, limit - adCount);

        const userRank = this.getUserRank();

        el.innerHTML = `
            <div class="page-header">
                <h2>${this.t('games')}</h2>
            </div>

            <div style="display:flex;gap:8px;margin-bottom:16px;">
                <div class="game-balance-badge" style="padding:8px 16px;font-size:0.8rem;">
                    <img src="${APP_CONFIG.ICONS.GAMES}"> ${this.gamesBalance} ${this.t('games_balance')}
                </div>
                <div class="game-balance-badge" style="padding:8px 16px;font-size:0.8rem;">
                    <img src="${APP_CONFIG.ICONS.POINTS}"> ${this.pointsBalance} ${this.t('points')}
                </div>
            </div>

            <div class="game-card" data-game="tictactoe">
                <div class="game-card-left">
                    <div class="game-icon-wrapper"><img src="${APP_CONFIG.ICONS.TICTACTOE}"></div>
                    <div class="game-info">
                        <h4>${this.t('tictactoe')}</h4>
                        <p>Win: 0.0005 GRAM + 100 Points</p>
                    </div>
                </div>
                <button class="game-go-btn">${this.t('go')}</button>
            </div>

            <div class="game-card" data-game="dice">
                <div class="game-card-left">
                    <div class="game-icon-wrapper"><img src="${APP_CONFIG.ICONS.DICE}"></div>
                    <div class="game-info">
                        <h4>${this.t('dice')}</h4>
                        <p>Win: 0.0005 GRAM + Points</p>
                    </div>
                </div>
                <button class="game-go-btn">${this.t('go')}</button>
            </div>

            <div class="game-card" data-game="lottery">
                <div class="game-card-left">
                    <div class="game-icon-wrapper"><img src="${APP_CONFIG.ICONS.LOTTERY}"></div>
                    <div class="game-info">
                        <h4>${this.t('lottery')}</h4>
                        <p>Win: 0.0005 GRAM + 100 Points</p>
                    </div>
                </div>
                <button class="game-go-btn">${this.t('go')}</button>
            </div>

            <div class="section-title">
                <span class="icon-circle"><i class="fas fa-plus-circle"></i></span>
                ${this.t('get_more_games')}
            </div>

            <div class="earn-option glass-card">
                <div class="earn-option-left">
                    <span class="icon-circle-small"><i class="fas fa-play"></i></span>
                    <div>
                        <span>${this.t('watch_ad')}</span>
                        <div class="reward-badge"><img src="${APP_CONFIG.ICONS.GAMES}"> +1 ${this.t('games_balance')}</div>
                        <div style="font-size:0.55rem;color:var(--text-secondary);">(${adsLeft} left today)</div>
                    </div>
                </div>
                <button class="earn-btn" id="games-watch-ad" ${adsLeft <= 0 ? 'disabled' : ''}>${this.t('watch')}</button>
            </div>

            <div class="earn-option glass-card">
                <div class="earn-option-left">
                    <span class="icon-circle-small"><i class="fas fa-tasks"></i></span>
                    <div>
                        <span>${this.t('complete_tasks')}</span>
                        <div class="reward-badge"><img src="${APP_CONFIG.ICONS.GAMES}"> +1 ${this.t('games_balance')}</div>
                    </div>
                </div>
                <button class="earn-btn secondary" id="games-tasks-btn">${this.t('go')}</button>
            </div>

            <div class="leaderboard-card">
                <div class="leaderboard-header">
                    <h4><i class="fas fa-trophy" style="color:var(--gold);"></i> ${this.t('games_battle')}</h4>
                    <div class="leaderboard-timer">${this.t('time_remaining')}: <span id="leaderboard-timer">--</span></div>
                </div>
                <div id="leaderboard-list"></div>
                ${userRank ? `<div style="text-align:center;font-size:0.8rem;color:var(--text-secondary);margin-top:8px;">${this.t('your_rank')}: #${userRank}</div>` : ''}
            </div>
        `;

        this.renderLeaderboard();
        this.updateLeaderboardTimer();

        document.querySelectorAll('[data-game]').forEach(card => {
            card.addEventListener('click', () => {
                const game = card.dataset.game;
                if (game === 'tictactoe') this.navigateTo('tictactoe-page');
                else if (game === 'dice') this.navigateTo('dice-page');
                else if (game === 'lottery') this.navigateTo('lottery-page');
            });
        });

        document.getElementById('games-watch-ad')?.addEventListener('click', async () => {
            if (await this.showAd()) {
                this.gamesBalance++;
                this._dirty = true;
                this.saveUserData(false);
                this.updateHeaderBalances();
                this.showNotification('+1 Game', 'Game added to your balance!', 'success');
                this.renderGamesPage();
            }
        });

        document.getElementById('games-tasks-btn')?.addEventListener('click', () => {
            this.navigateTo('tasks-page');
        });
    }

    getUserRank() {
        const sorted = this.leaderboardData.sort((a, b) => (b.points || 0) - (a.points || 0));
        const index = sorted.findIndex(item => item.id === this.tgUser.id.toString());
        return index !== -1 ? index + 1 : null;
    }

    renderLeaderboard() {
        const container = document.getElementById('leaderboard-list');
        if (!container) return;

        const sorted = this.leaderboardData.sort((a, b) => (b.points || 0) - (a.points || 0));
        const top = sorted.slice(0, 10);
        const userRank = this.getUserRank();

        if (top.length === 0) {
            container.innerHTML = `<div class="no-data"><i class="fas fa-trophy"></i><p>No players yet</p></div>`;
            return;
        }

        let html = '';
        top.forEach((item, index) => {
            const rank = index + 1;
            let rankClass = '';
            if (rank === 1) rankClass = 'gold';
            else if (rank === 2) rankClass = 'silver';
            else if (rank === 3) rankClass = 'bronze';
            
            const isCurrent = item.id === this.tgUser.id.toString();
            html += `
                <div class="leaderboard-item ${isCurrent ? 'current-user' : ''} ${rank <= 3 ? 'top' + rank : ''}">
                    <span class="rank ${rankClass}">#${rank}</span>
                    <img src="${item.photoUrl || APP_CONFIG.DEFAULT_USER_AVATAR}" class="player-avatar">
                    <span class="player-name">${item.firstName || 'User'}</span>
                    <span class="player-points">${item.points || 0}</span>
                </div>
            `;
        });

        if (userRank && userRank > 10) {
            html += `<div style="text-align:center;font-size:0.7rem;color:var(--text-secondary);padding:8px;">...</div>`;
            const userData = sorted.find(item => item.id === this.tgUser.id.toString());
            if (userData) {
                html += `
                    <div class="leaderboard-item current-user">
                        <span class="rank">#${userRank}</span>
                        <img src="${userData.photoUrl || APP_CONFIG.DEFAULT_USER_AVATAR}" class="player-avatar">
                        <span class="player-name">${userData.firstName || 'User'}</span>
                        <span class="player-points">${userData.points || 0}</span>
                    </div>
                `;
            }
        }

        container.innerHTML = html;
    }

    renderTicTacToePage() {
        const el = document.getElementById('tictactoe-page');
        if (!el) return;

        el.innerHTML = `
            <div class="page-header">
                <button class="back-btn" data-back="games"><i class="fas fa-arrow-left"></i> ${this.t('back')}</button>
                <h2>${this.t('tictactoe')}</h2>
                <div class="game-balance-badge" style="font-size:0.7rem;"><img src="${APP_CONFIG.ICONS.GAMES}"> ${this.gamesBalance}</div>
            </div>

            <div class="glass-card" style="padding:20px;">
                <div class="game-header">
                    <div class="game-header-left">
                        <img src="${APP_CONFIG.ICONS.TICTACTOE}" class="game-icon-small">
                        <span class="game-name">${this.t('tictactoe')}</span>
                    </div>
                </div>

                <div class="game-board-container">
                    <div class="tic-tac-toe-board" id="ttt-board">
                        ${Array(9).fill(0).map((_, i) => `<div class="ttt-cell" data-index="${i}"></div>`).join('')}
                    </div>
                </div>

                <div class="game-status-text" id="ttt-status">${this.t('your_turn')}</div>
                
                <button class="game-btn" id="ttt-play-btn">${this.t('play')}</button>
            </div>
        `;

        this.initTicTacToe();

        document.querySelector('.back-btn[data-back="games"]')?.addEventListener('click', () => {
            this.navigateTo('games-page');
        });
    }

    initTicTacToe() {
        let board = Array(9).fill(null);
        let currentPlayer = 'X';
        let gameActive = true;
        let gamesAvailable = this.gamesBalance;

        const cells = document.querySelectorAll('.ttt-cell');
        const status = document.getElementById('ttt-status');
        const playBtn = document.getElementById('ttt-play-btn');

        const checkWinner = (board) => {
            const lines = [
                [0,1,2], [3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [2,4,6]
            ];
            
            for (const line of lines) {
                const [a,b,c] = line;
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    return { winner: board[a], line: line };
                }
            }
            return board.every(cell => cell !== null) ? { winner: 'draw' } : null;
        };

        const getAIMove = (board) => {
            for (let i = 0; i < 9; i++) {
                if (board[i] === null) {
                    board[i] = 'O';
                    const result = checkWinner(board);
                    board[i] = null;
                    if (result && result.winner === 'O') return i;
                }
            }
            for (let i = 0; i < 9; i++) {
                if (board[i] === null) {
                    board[i] = 'X';
                    const result = checkWinner(board);
                    board[i] = null;
                    if (result && result.winner === 'X') return i;
                }
            }
            const empty = board.map((v, i) => v === null ? i : null).filter(v => v !== null);
            return empty[Math.floor(Math.random() * empty.length)];
        };

        const handleMove = (index) => {
            if (!gameActive || board[index] !== null || currentPlayer === 'O' || gamesAvailable <= 0) {
                if (gamesAvailable <= 0) {
                    this.showNotification('No Games', 'Get more games from the Games page!', 'warning');
                }
                return;
            }
            
            board[index] = 'X';
            cells[index].textContent = 'X';
            cells[index].classList.add('taken', 'x');
            
            const result = checkWinner(board);
            if (result) {
                this.handleTicTacToeEnd(result);
                return;
            }
            
            currentPlayer = 'O';
            status.textContent = this.t('opponent_turn');
            status.className = 'game-status-text opponent-turn';
            
            setTimeout(() => {
                const aiMove = getAIMove(board);
                if (aiMove !== null) {
                    board[aiMove] = 'O';
                    cells[aiMove].textContent = 'O';
                    cells[aiMove].classList.add('taken', 'o');
                    
                    const result2 = checkWinner(board);
                    if (result2) {
                        this.handleTicTacToeEnd(result2);
                        return;
                    }
                    
                    currentPlayer = 'X';
                    status.textContent = this.t('your_turn');
                    status.className = 'game-status-text your-turn';
                }
            }, 500);
        };

        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                const index = parseInt(cell.dataset.index);
                handleMove(index);
            });
        });

        const resetBoard = () => {
            board = Array(9).fill(null);
            currentPlayer = 'X';
            gameActive = true;
            cells.forEach(cell => {
                cell.textContent = '';
                cell.className = 'ttt-cell';
            });
            status.textContent = this.t('your_turn');
            status.className = 'game-status-text your-turn';
        };

        playBtn?.addEventListener('click', () => {
            if (gamesAvailable <= 0) {
                this.showNotification('No Games', 'Get more games from the Games page!', 'warning');
                return;
            }
            gamesAvailable--;
            this.gamesBalance = gamesAvailable;
            this._dirty = true;
            this.saveUserData(false);
            this.updateHeaderBalances();
            resetBoard();
            document.querySelector('.game-balance-badge').innerHTML = `<img src="${APP_CONFIG.ICONS.GAMES}"> ${gamesAvailable}`;
        });

        this.handleTicTacToeEnd = (result) => {
            gameActive = false;
            gamesAvailable--;
            this.gamesBalance = gamesAvailable;
            this._dirty = true;
            this.saveUserData(false);
            this.updateHeaderBalances();
            document.querySelector('.game-balance-badge').innerHTML = `<img src="${APP_CONFIG.ICONS.GAMES}"> ${gamesAvailable}`;

            let gramReward = 0;
            let pointsReward = 0;
            let detail = '';

            if (result.winner === 'X') {
                gramReward = APP_CONFIG.GAME_REWARDS.TICTACTOE.win.gram;
                pointsReward = APP_CONFIG.GAME_REWARDS.TICTACTOE.win.points;
                detail = 'You Win! 🎉';
                status.textContent = 'You Win! 🎉';
            } else if (result.winner === 'O') {
                gramReward = APP_CONFIG.GAME_REWARDS.TICTACTOE.lose.gram;
                pointsReward = APP_CONFIG.GAME_REWARDS.TICTACTOE.lose.points;
                detail = 'AI Wins 😔';
                status.textContent = 'AI Wins 😔';
            } else if (result.winner === 'draw') {
                gramReward = APP_CONFIG.GAME_REWARDS.TICTACTOE.draw.gram;
                pointsReward = APP_CONFIG.GAME_REWARDS.TICTACTOE.draw.points;
                detail = 'Draw 🤝';
                status.textContent = 'Draw 🤝';
            }

            this.gramBalance += gramReward;
            this.pointsBalance += pointsReward;
            this.saveUserData(false);
            this.updateHeaderBalances();

            if (result.line) {
                result.line.forEach(i => {
                    cells[i].classList.add('winning');
                });
            }

            setTimeout(() => {
                this.showGameResult('Tic-Tac-Toe', detail, gramReward, pointsReward);
            }, 500);
        };
    }

    renderDicePage() {
        const el = document.getElementById('dice-page');
        if (!el) return;

        el.innerHTML = `
            <div class="page-header">
                <button class="back-btn" data-back="games"><i class="fas fa-arrow-left"></i> ${this.t('back')}</button>
                <h2>${this.t('dice')}</h2>
                <div class="game-balance-badge" style="font-size:0.7rem;"><img src="${APP_CONFIG.ICONS.GAMES}"> ${this.gamesBalance}</div>
            </div>

            <div class="glass-card" style="padding:20px;">
                <div class="game-header">
                    <div class="game-header-left">
                        <img src="${APP_CONFIG.ICONS.DICE}" class="game-icon-small">
                        <span class="game-name">${this.t('dice')}</span>
                    </div>
                </div>

                <div class="dice-container" id="dice-game-container">
                    <div class="dice-item" id="dice-1"><span class="dice-number">1</span></div>
                    <div class="dice-item" id="dice-2"><span class="dice-number">1</span></div>
                    <div class="dice-item" id="dice-3"><span class="dice-number">1</span></div>
                </div>

                <button class="game-btn" id="dice-play-btn">${this.t('play')}</button>
            </div>
        `;

        this.initDiceGame();

        document.querySelector('.back-btn[data-back="games"]')?.addEventListener('click', () => {
            this.navigateTo('games-page');
        });
    }

    initDiceGame() {
        let gamesAvailable = this.gamesBalance;
        let isRolling = false;

        const dice1 = document.getElementById('dice-1');
        const dice2 = document.getElementById('dice-2');
        const dice3 = document.getElementById('dice-3');
        const playBtn = document.getElementById('dice-play-btn');

        const rollDiceValue = () => Math.floor(Math.random() * 6) + 1;

        const calculateDiceReward = (values) => {
            const [v1, v2, v3] = values;
            const points = v1 + v2 * v3;
            return { points: points, gram: APP_CONFIG.GAME_REWARDS.DICE.gramReward };
        };

        playBtn?.addEventListener('click', () => {
            if (isRolling) return;
            if (gamesAvailable <= 0) {
                this.showNotification('No Games', 'Get more games from the Games page!', 'warning');
                return;
            }

            isRolling = true;
            gamesAvailable--;
            this.gamesBalance = gamesAvailable;
            this._dirty = true;
            this.saveUserData(false);
            this.updateHeaderBalances();

            playBtn.textContent = 'ROLLING...';
            playBtn.disabled = true;
            document.querySelector('.game-balance-badge').innerHTML = `<img src="${APP_CONFIG.ICONS.GAMES}"> ${gamesAvailable}`;

            let results = [];
            let resultCount = 0;

            const rollDiceAnimated = (element, callback) => {
                let count = 0;
                const maxCount = 12 + Math.floor(Math.random() * 8);
                const interval = setInterval(() => {
                    const val = rollDiceValue();
                    element.querySelector('.dice-number').textContent = val;
                    element.classList.add('rolling');
                    count++;
                    if (count >= maxCount) {
                        clearInterval(interval);
                        element.classList.remove('rolling');
                        const finalVal = rollDiceValue();
                        element.querySelector('.dice-number').textContent = finalVal;
                        callback(finalVal);
                    }
                }, 60);
                return interval;
            };

            const onResult = (val) => {
                results.push(val);
                resultCount++;
                if (resultCount >= 3) {
                    setTimeout(() => {
                        const reward = calculateDiceReward(results);
                        const totalPoints = reward.points;
                        const gramReward = reward.gram;

                        this.gramBalance += gramReward;
                        this.pointsBalance += totalPoints;
                        this.saveUserData(false);
                        this.updateHeaderBalances();

                        const detail = `${results[0]} + ${results[1]} × ${results[2]} = ${totalPoints} Points`;
                        this.showGameResult('Dice', detail, gramReward, totalPoints);

                        isRolling = false;
                        playBtn.disabled = false;
                        playBtn.textContent = this.t('play');
                    }, 500);
                }
            };

            setTimeout(() => {
                rollDiceAnimated(dice1, onResult);
                setTimeout(() => {
                    rollDiceAnimated(dice2, onResult);
                    setTimeout(() => {
                        rollDiceAnimated(dice3, onResult);
                    }, 500);
                }, 500);
            }, 300);
        });
    }

    renderLotteryPage() {
        const el = document.getElementById('lottery-page');
        if (!el) return;

        const symbols = ['🍋', '🍇', '🍎', '🎰'];

        el.innerHTML = `
            <div class="page-header">
                <button class="back-btn" data-back="games"><i class="fas fa-arrow-left"></i> ${this.t('back')}</button>
                <h2>${this.t('lottery')}</h2>
                <div class="game-balance-badge" style="font-size:0.7rem;"><img src="${APP_CONFIG.ICONS.GAMES}"> ${this.gamesBalance}</div>
            </div>

            <div class="glass-card" style="padding:20px;">
                <div class="game-header">
                    <div class="game-header-left">
                        <img src="${APP_CONFIG.ICONS.LOTTERY}" class="game-icon-small">
                        <span class="game-name">${this.t('lottery')}</span>
                    </div>
                </div>

                <div class="lottery-container" id="lottery-container">
                    <div class="lottery-slot" id="lottery-1">🍋</div>
                    <div class="lottery-slot" id="lottery-2">🍋</div>
                    <div class="lottery-slot" id="lottery-3">🍋</div>
                </div>

                <button class="game-btn" id="lottery-play-btn">${this.t('play')}</button>
            </div>
        `;

        this.initLotteryGame();

        document.querySelector('.back-btn[data-back="games"]')?.addEventListener('click', () => {
            this.navigateTo('games-page');
        });
    }

    initLotteryGame() {
        let gamesAvailable = this.gamesBalance;
        let isSpinning = false;
        const symbols = ['🍋', '🍇', '🍎', '🎰'];

        const slot1 = document.getElementById('lottery-1');
        const slot2 = document.getElementById('lottery-2');
        const slot3 = document.getElementById('lottery-3');
        const playBtn = document.getElementById('lottery-play-btn');

        const calculateLotteryReward = (results) => {
            const key = results.join('');
            if (key === '🎰🎰🎰') {
                return APP_CONFIG.GAME_REWARDS.LOTTERY.jackpot;
            }
            if (APP_CONFIG.GAME_REWARDS.LOTTERY[key]) {
                return APP_CONFIG.GAME_REWARDS.LOTTERY[key];
            }
            if (results[0] === results[1] && results[1] === results[2]) {
                return APP_CONFIG.GAME_REWARDS.LOTTERY[key] || APP_CONFIG.GAME_REWARDS.LOTTERY.default;
            }
            return APP_CONFIG.GAME_REWARDS.LOTTERY.default;
        };

        playBtn?.addEventListener('click', () => {
            if (isSpinning) return;
            if (gamesAvailable <= 0) {
                this.showNotification('No Games', 'Get more games from the Games page!', 'warning');
                return;
            }

            isSpinning = true;
            gamesAvailable--;
            this.gamesBalance = gamesAvailable;
            this._dirty = true;
            this.saveUserData(false);
            this.updateHeaderBalances();

            playBtn.textContent = 'SPINNING...';
            playBtn.disabled = true;
            document.querySelector('.game-balance-badge').innerHTML = `<img src="${APP_CONFIG.ICONS.GAMES}"> ${gamesAvailable}`;

            let results = [];
            let resultCount = 0;

            const spinSlot = (element, callback) => {
                let count = 0;
                const maxCount = 18 + Math.floor(Math.random() * 10);
                const interval = setInterval(() => {
                    const idx = Math.floor(Math.random() * symbols.length);
                    const val = symbols[idx];
                    if (val === '🎰') {
                        element.innerHTML = `<img src="${APP_CONFIG.ICONS.LOTTERY_SYMBOL}" style="width:50px;height:50px;object-fit:contain;">`;
                    } else {
                        element.textContent = val;
                    }
                    element.classList.add('rolling');
                    count++;
                    if (count >= maxCount) {
                        clearInterval(interval);
                        element.classList.remove('rolling');
                        const finalIdx = Math.floor(Math.random() * symbols.length);
                        const finalVal = symbols[finalIdx];
                        if (finalVal === '🎰') {
                            element.innerHTML = `<img src="${APP_CONFIG.ICONS.LOTTERY_SYMBOL}" style="width:50px;height:50px;object-fit:contain;">`;
                        } else {
                            element.textContent = finalVal;
                        }
                        callback(finalVal);
                    }
                }, 80);
                return interval;
            };

            const onResult = (val) => {
                results.push(val);
                resultCount++;
                if (resultCount >= 3) {
                    setTimeout(() => {
                        const reward = calculateLotteryReward(results);
                        const gramReward = reward.gram || 0;
                        const pointsReward = reward.points || 0;

                        this.gramBalance += gramReward;
                        this.pointsBalance += pointsReward;
                        this.saveUserData(false);
                        this.updateHeaderBalances();

                        const detail = results.join(' ');
                        this.showGameResult('Lottery', detail, gramReward, pointsReward);

                        isSpinning = false;
                        playBtn.disabled = false;
                        playBtn.textContent = this.t('play');
                    }, 500);
                }
            };

            setTimeout(() => {
                spinSlot(slot1, onResult);
                setTimeout(() => {
                    spinSlot(slot2, onResult);
                    setTimeout(() => {
                        spinSlot(slot3, onResult);
                    }, 1000);
                }, 1000);
            }, 500);
        });
    }

    showGameResult(gameName, detail, gramReward, pointsReward) {
        const modal = document.getElementById('game-result-modal');
        const title = document.getElementById('game-result-title');
        const icon = document.getElementById('game-result-icon');
        const detailEl = document.getElementById('game-result-detail');
        const gramEl = document.getElementById('game-result-gram');
        const pointsEl = document.getElementById('game-result-points');
        const effect = document.getElementById('game-result-effect');

        const icons = {
            'Tic-Tac-Toe': '❌',
            'Dice': '🎲',
            'Lottery': '🎰'
        };

        title.textContent = gameName + ' Result';
        icon.innerHTML = icons[gameName] || '🎮';
        detailEl.textContent = detail;

        if (gramReward > 0) {
            gramEl.textContent = `+${gramReward.toFixed(4)} GRAM`;
            gramEl.style.display = 'block';
        } else {
            gramEl.textContent = this.t('no_reward');
            gramEl.style.display = 'block';
        }

        if (pointsReward > 0) {
            pointsEl.textContent = `+${pointsReward} ${this.t('points')}`;
            pointsEl.style.display = 'block';
        } else {
            pointsEl.textContent = '';
            pointsEl.style.display = 'none';
        }

        effect.className = 'game-result-effect show';
        effect.innerHTML = '✨';
        setTimeout(() => { effect.className = 'game-result-effect'; }, 1000);

        modal.style.display = 'flex';

        document.getElementById('game-claim-prize')?.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        document.getElementById('close-game-result')?.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    renderTasksPage() {
        const el = document.getElementById('tasks-page');
        if (!el) return;

        el.innerHTML = `
            <div class="page-header">
                <h2>${this.t('gram_snake_tasks')}</h2>
                <button class="add-task-icon-btn header-action" id="add-task-from-tasks"><i class="fas fa-plus"></i></button>
            </div>
            <div id="tasks-page-container"></div>
        `;

        document.getElementById('add-task-from-tasks')?.addEventListener('click', () => {
            this.navigateTo('add-task-page');
        });

        this.renderTaskLists();
    }

    async renderTaskLists() {
        const container = document.getElementById('tasks-page-container');
        if (!container) return;

        const socialTasks = await this.loadActiveSocialTasks();
        const partnerTasks = await this.loadPartnerTasks();

        let html = '';

        html += `<div class="section-title"><span class="icon-circle"><i class="fas fa-users"></i></span> ${this.t('social_tasks')}</div>`;
        if (socialTasks.length > 0) {
            html += socialTasks.map(t => {
                const rewardGram = APP_CONFIG.SOCIAL_TASK_REWARDS.GRAM || 0.0001;
                const rewardGames = APP_CONFIG.SOCIAL_TASK_REWARDS.GAMES || 1;
                return `
                    <div class="task-item glass-card">
                        <div class="task-item-left">
                            <img src="${APP_CONFIG.TASK_IMAGE}" class="task-img">
                            <div class="task-item-info">
                                <h4>${t.name}</h4>
                                ${t.description ? `<div class="task-desc">${t.description}</div>` : ''}
                                <div class="task-reward">
                                    <span class="task-reward-badge"><img src="${APP_CONFIG.ICONS.GRAM}"> ${rewardGram} GRAM</span>
                                    <span class="task-reward-badge"><img src="${APP_CONFIG.ICONS.GAMES}"> +${rewardGames}</span>
                                </div>
                            </div>
                        </div>
                        <button class="task-btn start" data-id="${t.id}" data-reward-gram="${rewardGram}" data-reward-games="${rewardGames}" data-url="${t.url}" data-verify="${t.verification}">Start</button>
                    </div>
                `;
            }).join('');
        } else {
            html += `<div class="no-data"><i class="fas fa-globe"></i><p>${this.t('no_tasks')}</p><small>${this.t('check_later')}</small></div>`;
        }

        html += `<div class="section-title"><span class="icon-circle"><i class="fas fa-handshake"></i></span> ${this.t('partner_tasks')}</div>`;
        if (partnerTasks.length > 0) {
            html += partnerTasks.map(t => {
                const reward = t.rewardValue || 0.0001;
                return `
                    <div class="task-item glass-card">
                        <div class="task-item-left">
                            <img src="${APP_CONFIG.TASK_IMAGE}" class="task-img">
                            <div class="task-item-info">
                                <h4>${t.name}</h4>
                                ${t.description ? `<div class="task-desc">${t.description}</div>` : ''}
                                <div class="task-reward">
                                    <span class="task-reward-badge"><img src="${APP_CONFIG.ICONS.GRAM}"> ${reward} GRAM</span>
                                </div>
                            </div>
                        </div>
                        <button class="task-btn start" data-id="partner_${t.id}" data-reward-gram="${reward}" data-reward-games="0" data-url="${t.url}" data-verify="${t.verification || false}" data-partner="true">Start</button>
                    </div>
                `;
            }).join('');
        } else {
            html += `<div class="no-data"><i class="fas fa-handshake"></i><p>${this.t('no_tasks')}</p><small>${this.t('check_later')}</small></div>`;
        }

        container.innerHTML = html;

        container.querySelectorAll('.task-btn.start').forEach(btn => {
            btn.addEventListener('click', async () => {
                if (this.isTaskRunning) {
                    this.showNotification('Busy', 'Complete current task first', 'warning');
                    return;
                }
                const id = btn.dataset.id;
                const rewardGram = parseFloat(btn.dataset.rewardGram) || 0;
                const rewardGames = parseFloat(btn.dataset.rewardGames) || 0;
                const url = btn.dataset.url;
                const verify = btn.dataset.verify === 'true';
                const isPartner = btn.dataset.partner === 'true';

                window.open(url, '_blank');
                this.isTaskRunning = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin slow-spin"></i>';
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
                            newBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
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
                                if (!isPartner) {
                                    this.completedTasks.add(id);
                                    this.completedSocialTasks.set(id, Date.now());
                                    this.dailyTasksCompleted++;
                                }

                                if (rewardGram > 0) {
                                    this.gramBalance += rewardGram;
                                }
                                if (rewardGames > 0) {
                                    this.gamesBalance += rewardGames;
                                }

                                this._dirty = true;
                                await this.saveUserData(false);
                                this.updateHeaderBalances();

                                newBtn.innerHTML = 'Done';
                                newBtn.disabled = true;
                                newBtn.classList.add('done');
                                newBtn.classList.remove('check');

                                let msg = '';
                                if (rewardGram > 0) msg += `+${rewardGram} GRAM `;
                                if (rewardGames > 0) msg += `+${rewardGames} Game`;
                                this.showNotification('Task Completed!', msg, 'success');
                                this.renderTaskLists();
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
    }

    renderAddTaskPage() {
        const el = document.getElementById('add-task-page');
        if (!el) return;

        const completions = [100, 250, 500, 1000];
        const completionsLabels = completions.map(c => this.t(`completions_${c}`) || c);

        const taskPrice = (APP_CONFIG.TON_PRICE_PER_100 * (100 / 100)) || 0.2;

        el.innerHTML = `
            <div class="page-header">
                <button class="back-btn" data-back="tasks"><i class="fas fa-arrow-left"></i> ${this.t('back')}</button>
                <h2>${this.t('add_task')}</h2>
            </div>

            <div class="glass-card" style="padding:20px;">
                <div class="form-group">
                    <label class="form-label">${this.t('task_name')}</label>
                    <input type="text" id="task-name-input" class="form-input" maxlength="15" placeholder="${this.t('task_name_placeholder')}" oninput="window.app.updateTaskPreview()">
                </div>
                <div class="form-group">
                    <label class="form-label">${this.t('task_description')}</label>
                    <input type="text" id="task-desc-input" class="form-input" maxlength="25" placeholder="${this.t('task_desc_placeholder')}" oninput="window.app.updateTaskPreview()">
                </div>
                <div class="form-group">
                    <label class="form-label">${this.t('task_url')}</label>
                    <input type="url" id="task-url-input" class="form-input" placeholder="${this.t('task_url_placeholder')}" oninput="window.app.updateTaskPreview()">
                    <div id="add-admin-div" style="display:none;margin-top:8px;"></div>
                </div>
                <div class="form-group">
                    <label class="form-label">${this.t('verification')}</label>
                    <div class="toggle-group">
                        <button class="toggle-option" data-value="true" onclick="window.app.toggleVerification(this)">${this.t('yes')}</button>
                        <button class="toggle-option active" data-value="false" onclick="window.app.toggleVerification(this)">${this.t('no')}</button>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">${this.t('max_completions')}</label>
                    <div class="toggle-group completions-group">
                        ${completions.map((c, i) => `
                            <button class="toggle-option ${i === 0 ? 'active' : ''}" data-value="${c}" onclick="window.app.selectCompletions(this)">${completionsLabels[i]}</button>
                        `).join('')}
                    </div>
                </div>

                <div class="task-preview">
                    <div class="preview-header">${this.t('task_preview')}</div>
                    <div id="task-preview-container">
                        <div class="task-item glass-card">
                            <div class="task-item-left">
                                <img src="${APP_CONFIG.TASK_IMAGE}" class="task-img">
                                <div class="task-item-info">
                                    <h4 id="preview-name">Task Name</h4>
                                    <div id="preview-desc" class="task-desc"></div>
                                    <div class="task-reward">
                                        <span class="task-reward-badge"><img src="${APP_CONFIG.ICONS.GRAM}"> ${APP_CONFIG.SOCIAL_TASK_REWARDS.GRAM || 0.0001} GRAM</span>
                                        <span class="task-reward-badge"><img src="${APP_CONFIG.ICONS.GAMES}"> +${APP_CONFIG.SOCIAL_TASK_REWARDS.GAMES || 1}</span>
                                    </div>
                                </div>
                            </div>
                            <button class="task-btn" style="opacity:0.5;pointer-events:none;">Start</button>
                        </div>
                    </div>
                </div>

                <button class="pay-btn-full" id="pay-task-btn">${this.t('pay_stars', { stars: taskPrice })}</button>
                <div id="add-task-status" style="margin-top:12px;text-align:center;"></div>
            </div>

            <div class="section-title">
                <span class="icon-circle"><i class="fas fa-tasks"></i></span>
                ${this.t('my_tasks')}
            </div>
            <div id="my-tasks-list-container"></div>
        `;

        this.renderMyTasks();
        this.updateTaskPreview();

        document.getElementById('pay-task-btn')?.addEventListener('click', async () => {
            const name = document.getElementById('task-name-input').value.trim();
            const description = document.getElementById('task-desc-input').value.trim();
            const url = document.getElementById('task-url-input').value.trim();
            const verification = document.querySelector('.toggle-option.active[data-value]')?.dataset.value || 'false';
            const maxCompletions = parseInt(document.querySelector('.completions-group .toggle-option.active')?.dataset.value || 0);

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
            status.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

            const taskId = Date.now().toString();

            if (verification === 'true') {
                const checkResult = await this.checkBotAdminByUrl(url);
                if (!checkResult.isAdmin) {
                    status.innerHTML = '<span style="color:var(--error);">Bot must be admin in the channel for verification</span>';
                    return;
                }
            }

            const price = (APP_CONFIG.TON_PRICE_PER_100 * (maxCompletions / 100));
            if (this.gramBalance < price) {
                status.innerHTML = `<span style="color:var(--error);">Insufficient balance! Need ${price.toFixed(2)} GRAM</span>`;
                return;
            }

            this.gramBalance -= price;
            this._dirty = true;
            this.saveUserData(false);
            this.updateHeaderBalances();

            const taskData = {
                name: name,
                url: url,
                description: description || '',
                category: 'social',
                verification: verification === 'true',
                max: maxCompletions,
                status: 'active',
                owner: this.tgUser.id,
                createdAt: Date.now(),
                total: 0
            };

            try {
                await this.db.ref(`userTasks/${this.tgUser.id}/${taskId}`).set(taskData);
                this.showNotification('Success', this.t('task_added'), 'success');
                status.innerHTML = '<span style="color:var(--success);">Task added successfully!</span>';
                await this.loadUserTasks();
                this.renderMyTasks();
                document.getElementById('task-name-input').value = '';
                document.getElementById('task-desc-input').value = '';
                document.getElementById('task-url-input').value = '';
                this.updateTaskPreview();
            } catch (error) {
                this.gramBalance += price;
                this.saveUserData(false);
                this.updateHeaderBalances();
                status.innerHTML = `<span style="color:var(--error);">Failed to add task: ${error.message}</span>`;
            }
        });

        document.querySelector('.back-btn[data-back="tasks"]')?.addEventListener('click', () => {
            this.navigateTo('tasks-page');
        });
    }

    toggleVerification(el) {
        const parent = el.parentElement;
        parent.querySelectorAll('.toggle-option').forEach(o => o.classList.remove('active'));
        el.classList.add('active');

        const addAdminDiv = document.getElementById('add-admin-div');
        if (addAdminDiv) {
            if (el.dataset.value === 'true') {
                const botLink = `https://t.me/${APP_CONFIG.BOT_USERNAME}?startchannel=m&admin=invite_users`;
                addAdminDiv.innerHTML = `<button class="add-bot-btn" onclick="window.open('${botLink}', '_blank')"><i class="fab fa-telegram"></i> ${this.t('add_bot_as_admin')}</button>`;
                addAdminDiv.style.display = 'block';
            } else {
                addAdminDiv.style.display = 'none';
            }
        }
        this.updateTaskPreview();
    }

    selectCompletions(el) {
        const parent = el.parentElement;
        parent.querySelectorAll('.toggle-option').forEach(o => o.classList.remove('active'));
        el.classList.add('active');
        this.updateTaskPreview();
    }

    updateTaskPreview() {
        const name = document.getElementById('task-name-input')?.value.trim() || 'Task Name';
        const desc = document.getElementById('task-desc-input')?.value.trim() || '';
        const previewName = document.getElementById('preview-name');
        const previewDesc = document.getElementById('preview-desc');
        
        if (previewName) previewName.textContent = name;
        if (previewDesc) {
            previewDesc.textContent = desc;
            previewDesc.style.display = desc ? 'block' : 'none';
        }
    }

    renderMyTasks() {
        const container = document.getElementById('my-tasks-list-container');
        if (!container) return;

        if (this.userTasks.length === 0) {
            container.innerHTML = `<div class="no-data"><i class="fas fa-tasks"></i><p>${this.t('no_tasks_created')}</p><small>${this.t('create_first_task')}</small></div>`;
            return;
        }

        container.innerHTML = this.userTasks.map(task => {
            const isCompleted = task.total >= task.max;
            const statusClass = isCompleted ? 'completed' : (task.status === 'active' ? 'active' : 'pending');
            const statusText = isCompleted ? this.t('completed') : (task.status === 'active' ? this.t('active') : this.t('pending'));
            const progress = isCompleted ? 100 : (task.total / task.max) * 100;

            return `
                <div class="my-task-card">
                    <div class="task-header">
                        <span class="task-name">${task.name}</span>
                        <span class="task-status ${statusClass}">${statusText}</span>
                    </div>
                    ${task.description ? `<div style="font-size:0.7rem;color:var(--text-secondary);margin-top:4px;">${task.description}</div>` : ''}
                    <div class="task-progress-bar">
                        <div class="progress-bar" style="width:${Math.min(progress, 100)}%"></div>
                        <div class="progress-text">${task.total}/${task.max} ${this.t('completions')}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderInvite() {
        const el = document.getElementById('invite-page');
        if (!el) return;

        const link = APP_CONFIG.BOT_LINK + this.tgUser.id;
        const claimable = this.claimableEarnings;
        const totalEarnings = this.totalEarnings;

        const hasClaimable = claimable.gram > 0;

        el.innerHTML = `
            <div class="glass-card" style="padding:20px;margin-bottom:16px;">
                <h3 style="text-align:center;margin-bottom:12px;"><i class="fas fa-users" style="color:var(--primary);"></i> ${this.t('invite_earn')}</h3>
                <div class="invite-earnings-details">
                    <div class="invite-earning-item">
                        <span class="icon-circle-small"><i class="fas fa-percent"></i></span>
                        <span class="earning-text">${this.t('earn_percent', { percent: APP_CONFIG.REFERRAL_PERCENTAGE || 10 })}</span>
                    </div>
                    <div class="invite-earning-item">
                        <span class="icon-circle-small"><i class="fas fa-tasks"></i></span>
                        <span class="earning-text">${this.t('earn_10_tasks')}</span>
                    </div>
                </div>

                <div class="invite-stats">
                    <div class="invite-stat-card">
                        <div class="stat-value">${this.totalReferrals}</div>
                        <div class="stat-label">${this.t('total_referrals')}</div>
                    </div>
                    <div class="invite-stat-card">
                        <div class="stat-value">${this.activeReferrals}</div>
                        <div class="stat-label">${this.t('active_referrals')}</div>
                    </div>
                </div>

                <div style="display:flex;gap:8px;margin-top:12px;">
                    <button class="earn-btn" id="copy-invite-link" style="flex:1;padding:10px;font-size:0.8rem;"><i class="fas fa-copy"></i> ${this.t('copy')}</button>
                </div>
            </div>

            <div class="earnings-grid">
                <div class="claim-card">
                    <img src="${APP_CONFIG.ICONS.GRAM}">
                    <div class="claim-amount">${claimable.gram.toFixed(4)}</div>
                    <div class="claim-label">${this.t('available_rewards')}</div>
                    ${hasClaimable ? `<button class="claim-btn" id="claim-gram">${this.t('claim')}</button>` : ''}
                </div>
                <div class="claim-card">
                    <img src="${APP_CONFIG.ICONS.GRAM}">
                    <div class="claim-amount">${totalEarnings.gram.toFixed(4)}</div>
                    <div class="claim-label">${this.t('total_earnings')}</div>
                </div>
            </div>
        `;

        document.getElementById('copy-invite-link')?.addEventListener('click', () => {
            navigator.clipboard.writeText(link);
            this.showNotification(this.t('copy_success'), this.t('link_copied'), 'success');
        });

        document.getElementById('claim-gram')?.addEventListener('click', async () => {
            if (this.claimableEarnings.gram <= 0) return;
            if (await this.showAd()) {
                this.gramBalance += this.claimableEarnings.gram;
                this.claimableEarnings.gram = 0;
                this._dirty = true;
                this.saveUserData(false);
                this.updateHeaderBalances();
                this.showNotification('Claimed!', 'GRAM rewards claimed', 'success');
                this.renderInvite();
            }
        });
    }

    renderWalletPage() {
        const el = document.getElementById('wallet-page');
        if (!el) return;

        if (!this.depositMemo) {
            this.depositMemo = 'DEP_' + Date.now().toString(36).toUpperCase() + '_' + this.tgUser.id.toString(36).toUpperCase();
        }

        el.innerHTML = `
            <div class="page-header">
                <h2><i class="fas fa-wallet"></i> ${this.t('wallet')}</h2>
            </div>

            <div class="deposit-card glass-card">
                <div class="deposit-title"><i class="fas fa-arrow-down"></i> ${this.t('deposit_funds')}</div>
                <div class="deposit-info">
                    <div class="deposit-info-item">
                        <span class="label">${this.t('deposit_address')}</span>
                        <span class="value">
                            <span class="addr-text">${APP_CONFIG.TON_WALLET_ADDRESS}</span>
                            <button class="copy-btn" id="copy-deposit-address"><i class="fas fa-copy"></i></button>
                        </span>
                    </div>
                    <div class="deposit-info-item">
                        <span class="label">${this.t('deposit_memo')}</span>
                        <span class="value">
                            <span class="addr-text">${this.depositMemo}</span>
                            <button class="copy-btn" id="copy-deposit-memo"><i class="fas fa-copy"></i></button>
                        </span>
                    </div>
                </div>
                <button class="withdraw-confirm-btn" id="check-deposit-btn">${this.t('check_payment')}</button>
                <div id="deposit-status" style="margin-top:8px;text-align:center;font-size:0.75rem;"></div>
            </div>

            <div class="withdraw-card glass-card">
                <div class="withdraw-title"><i class="fas fa-arrow-up-right-from-square"></i> ${this.t('withdraw_funds')}</div>

                <div class="form-group">
                    <label class="form-label">${this.t('wallet_address')}</label>
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
            </div>

            <div class="section-title">
                <span class="icon-circle"><i class="fas fa-clock-rotate-left"></i></span>
                ${this.t('transactions')}
            </div>
            <div class="tab-bar">
                <button class="tab-btn active" data-tab="deposits">${this.t('deposits')}</button>
                <button class="tab-btn" data-tab="withdrawals">${this.t('withdrawals')}</button>
            </div>
            <div id="deposits-tab" class="transaction-tab-content active">
                <div id="deposits-container"></div>
            </div>
            <div id="withdrawals-tab" class="transaction-tab-content">
                <div id="withdrawals-container"></div>
            </div>
        `;

        document.getElementById('copy-deposit-address')?.addEventListener('click', () => {
            navigator.clipboard.writeText(APP_CONFIG.TON_WALLET_ADDRESS);
            this.showNotification(this.t('copy_success'), this.t('copy_address'), 'success');
        });

        document.getElementById('copy-deposit-memo')?.addEventListener('click', () => {
            navigator.clipboard.writeText(this.depositMemo);
            this.showNotification(this.t('copy_success'), this.t('copy_memo'), 'success');
        });

        document.getElementById('check-deposit-btn')?.addEventListener('click', async () => {
            if (this.pendingDepositCheck) return;
            this.pendingDepositCheck = true;
            const statusEl = document.getElementById('deposit-status');
            statusEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + this.t('checking');

            try {
                const res = await fetch('/api/check-deposit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        address: APP_CONFIG.TON_WALLET_ADDRESS,
                        memo: this.depositMemo,
                        userId: this.tgUser.id
                    })
                });
                const data = await res.json();

                if (data.success && data.found) {
                    const amount = data.amount || 0;
                    this.gramBalance += amount;
                    this.addDeposit(amount, 'GRAM', this.depositMemo, data.txId);
                    this._dirty = true;
                    this.saveUserData(false);
                    this.updateHeaderBalances();
                    this.depositMemo = 'DEP_' + Date.now().toString(36).toUpperCase() + '_' + this.tgUser.id.toString(36).toUpperCase();
                    statusEl.innerHTML = `<span style="color:var(--success);">${this.t('payment_verified')} +${amount} GRAM</span>`;
                    this.showNotification('Success', this.t('deposit_success', { amount: amount }), 'success');
                    this.renderWalletPage();
                } else if (data.success && !data.found) {
                    statusEl.innerHTML = `<span style="color:var(--warning);">${this.t('payment_not_found')}</span>`;
                } else {
                    statusEl.innerHTML = `<span style="color:var(--error);">${data.error || 'Error checking payment'}</span>`;
                }
            } catch (error) {
                statusEl.innerHTML = `<span style="color:var(--error);">${error.message}</span>`;
            }
            this.pendingDepositCheck = false;
        });

        const walletInput = document.getElementById('wallet-input');
        const amountInput = document.getElementById('amount-input');
        const withdrawBtn = document.getElementById('withdraw-btn');
        const maxBtn = document.getElementById('max-btn');

        const checkWithdraw = () => {
            const wallet = walletInput?.value.trim();
            const amount = parseFloat(amountInput?.value);
            const totalRequired = amount + (APP_CONFIG.WITHDRAWAL_FEES || 0);
            const isValid = wallet && wallet.length >= 10 && amount >= APP_CONFIG.MINIMUM_WITHDRAW && totalRequired <= this.gramBalance && amount > 0;
            if (withdrawBtn) {
                if (isValid) withdrawBtn.classList.remove('disabled');
                else withdrawBtn.classList.add('disabled');
            }
        };

        maxBtn?.addEventListener('click', () => {
            if (amountInput) {
                let maxAmount = this.gramBalance - (APP_CONFIG.WITHDRAWAL_FEES || 0) - 0.00001;
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
                const totalRequired = amount + (APP_CONFIG.WITHDRAWAL_FEES || 0);
                this.gramBalance -= totalRequired;
                this.addWithdrawal(amount, 'GRAM', wallet);
                this._dirty = true;
                this.saveUserData(false);
                this.updateHeaderBalances();
                this.showNotification('Withdrawal Requested', `${amount} GRAM sent to ${wallet}`, 'success');
                this.renderWalletPage();
            }
        });

        el.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                el.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const tab = btn.dataset.tab;
                el.querySelectorAll('.transaction-tab-content').forEach(c => c.classList.remove('active'));
                document.getElementById(`${tab}-tab`).classList.add('active');
                this.renderTransactions(tab);
            });
        });

        this.renderTransactions('deposits');
    }

    renderTransactions(tab) {
        const container = document.getElementById(`${tab}-container`);
        if (!container) return;

        const data = tab === 'deposits' ? this.deposits : this.withdrawals;

        if (data.length === 0) {
            container.innerHTML = `<div class="no-data"><i class="fas fa-receipt"></i><p>${this.t('no_transactions')}</p></div>`;
            return;
        }

        container.innerHTML = data.map(tx => `
            <div class="transaction-item">
                <div class="transaction-left">
                    <i class="fas ${tab === 'deposits' ? 'fa-arrow-down' : 'fa-arrow-up'}" style="color:${tab === 'deposits' ? 'var(--success)' : 'var(--error)'};"></i>
                    <span class="transaction-name">${tab === 'deposits' ? 'Deposit' : 'Withdrawal'}</span>
                    ${tx.memo ? `<span style="font-size:0.55rem;color:var(--text-secondary);font-family:monospace;">${tx.memo}</span>` : ''}
                </div>
                <span class="transaction-amount ${tab === 'deposits' ? 'positive' : 'negative'}">${tab === 'deposits' ? '+' : '-'}${tx.amount.toFixed(4)} ${tx.currency || 'GRAM'}</span>
            </div>
        `).join('');
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

            if (promoData.rewardType === 'gram') {
                this.gramBalance += promoData.reward;
            } else {
                this.showNotification('Error', 'Invalid reward type', 'error');
                return false;
            }

            await this.db.ref(`promoCodes/${code}/total`).set((totalUses || 0) + 1);
            this._dirty = true;
            this.saveUserData(false);
            this.updateHeaderBalances();
            this.showNotification('Code Applied!', 'Reward added to your balance', 'success');
            this.renderHome();
            return true;
        }
        return false;
    }

    navigateTo(page) {
        const pageMap = {
            'home-page': 'home-page',
            'games-page': 'games-page',
            'tasks-page': 'tasks-page',
            'invite-page': 'invite-page',
            'wallet-page': 'wallet-page',
            'tictactoe-page': 'tictactoe-page',
            'dice-page': 'dice-page',
            'lottery-page': 'lottery-page',
            'add-task-page': 'add-task-page'
        };

        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById(page);
        if (target) target.classList.add('active');

        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        const navMap = {
            'home-page': 0,
            'games-page': 1,
            'tasks-page': 2,
            'invite-page': 3,
            'wallet-page': 4
        };
        if (navMap[page] !== undefined) {
            const btns = document.querySelectorAll('.nav-btn');
            if (btns[navMap[page]]) btns[navMap[page]].classList.add('active');
        }

        if (page === 'home-page') this.renderHome();
        else if (page === 'games-page') this.renderGamesPage();
        else if (page === 'tasks-page') this.renderTasksPage();
        else if (page === 'invite-page') this.renderInvite();
        else if (page === 'wallet-page') this.renderWalletPage();
        else if (page === 'tictactoe-page') this.renderTicTacToePage();
        else if (page === 'dice-page') this.renderDicePage();
        else if (page === 'lottery-page') this.renderLotteryPage();
        else if (page === 'add-task-page') this.renderAddTaskPage();
    }

    setupEventListeners() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.dataset.page;
                this.navigateTo(page);
            });
        });

        const settingsBtn = document.getElementById('settings-btn');
        settingsBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            const menu = document.getElementById('settings-menu');
            const isOpen = menu.style.display === 'block';
            menu.style.display = isOpen ? 'none' : 'block';
            settingsBtn.classList.toggle('active', !isOpen);
            this.updateSettingsUI();
        });

        document.addEventListener('click', (e) => {
            const menu = document.getElementById('settings-menu');
            const btn = document.getElementById('settings-btn');
            if (menu && !menu.contains(e.target) && !btn?.contains(e.target)) {
                menu.style.display = 'none';
                btn?.classList.remove('active');
            }
        });

        document.getElementById('dark-mode-toggle')?.addEventListener('change', (e) => {
            this.darkMode = e.target.checked;
            this.applyTheme();
            this.saveSettings();
        });

        document.getElementById('vibration-toggle')?.addEventListener('change', (e) => {
            this.vibrationEnabled = e.target.checked;
            if (this.vibrationEnabled) this.vibrate('success');
            this.saveSettings();
        });

        document.getElementById('lang-select')?.addEventListener('change', (e) => {
            this.lang = e.target.value;
            this.saveSettings();
            this.updateHeaderBalances();
            this.renderHome();
            this.showNotification('Language', 'Changed language', 'success');
        });

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
            if (this.watch10AdsDate !== today) {
                this.watch10AdsClaimed = false;
            }
            if (this.adCountDate !== today) {
                this.adCountDate = today;
                this.adCount = 0;
            }
            this.dailyTasksCompleted = 0;
        }, 60000);

        let dotCount = 1;
        const loaderText = document.getElementById('loader-text');
        if (loaderText) {
            setInterval(() => {
                dotCount = (dotCount % 3) + 1;
                loaderText.textContent = 'Loading' + '.'.repeat(dotCount);
            }, 500);
        }
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
