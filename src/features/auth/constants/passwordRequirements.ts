export interface PasswordRequirement {
	text: string;
	test: (pwd: string) => boolean;
}

export const PASSWORD_REQUIREMENTS: PasswordRequirement[] = [
	{
		text: 'Al menos 8 caracteres',
		test: (pwd) => pwd.length >= 8,
	},
	{
		text: 'Una letra mayúscula',
		test: (pwd) => /[A-Z]/.test(pwd),
	},
	{
		text: 'Una letra minúscula',
		test: (pwd) => /[a-z]/.test(pwd),
	},
	{
		text: 'Un número',
		test: (pwd) => /[0-9]/.test(pwd),
	},
];
