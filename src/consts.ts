// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = '程式散步｜學習筆記';
export const SITE_DESCRIPTION = '網頁開發的學習旅程';
export const CATEGORIES = ['Database', 'Ruby on Rails', 'User experience', 'Others'] as const;
// 卡片標籤上顯示的簡稱，沒有列出的分類直接顯示原名
export const CATEGORY_SHORT_LABELS: Partial<Record<(typeof CATEGORIES)[number], string>> = {
	'User experience': 'UX',
};
