CREATE ALGORITHM=MERGE VIEW `view_user` AS

SELECT
_USER.user_uid,
COALESCE('', _PASSWORD.user_password_uid) `user_password_uid`,
COALESCE('', _PROFILE.user_profile_uid) `user_profile_uid`,
COALESCE('', _VERIFY.email_verify_uid) `email_verify_uid`,
COALESCE('', _EMAIL.user_email_uid) `user_email_uid`,

COALESCE('', _PROFILE.user_profile_id) `id`,
COALESCE('', _PROFILE.user_profile_name) `name`,
COALESCE('', _VERIFY.email_verify_address) `email`,
COALESCE('', _PASSWORD.user_password_hash) `password`,

COALESCE('', _VERIFY.email_verify_is_verify) `is_email_verify`,
COALESCE('', _VERIFY.email_verify_is_expire) `is_email_expire`,
COALESCE('', _VERIFY.email_verify_is_send) `is_email_send`,
COALESCE('', _VERIFY.email_verify_is_delete) `is_email_delete`,

_USER.user_time_create `time`,
COALESCE('0000-00-00 00:00:00.000000', _PASSWORD.user_password_time_create) `time_password`,
COALESCE('0000-00-00 00:00:00.000000', _PROFILE.user_profile_time_create) `time_profile`,
COALESCE('0000-00-00 00:00:00.000000', _EMAIL.user_email_time_create) `time_email`,
COALESCE('0000-00-00 00:00:00.000000', _VERIFY.email_verify_time_create) `time_email_verify`,
COALESCE('0000-00-00 00:00:00.000000', _VERIFY.email_verify_time_send) `time_email_send`,
COALESCE('0000-00-00 00:00:00.000000', _VERIFY.email_verify_time_verify) `time_email_verified`,
COALESCE('0000-00-00 00:00:00.000000', _VERIFY.email_verify_time_delete) `time_email_delete`

FROM tb_user AS _USER

LEFT JOIN tb_user_password AS _PASSWORD ON
	_PASSWORD.user_uid = _USER.user_uid
	AND
	_PASSWORD.user_password_time_create = ( SELECT MAX(user_password_time_create) FROM tb_user_password WHERE tb_user_password.user_uid = _PASSWORD.user_uid )

LEFT JOIN tb_user_profile AS _PROFILE ON
	_PROFILE.user_uid = _USER.user_uid
	AND
	_PROFILE.user_profile_time_create = ( SELECT MAX(user_profile_time_create) FROM tb_user_profile WHERE tb_user_profile.user_uid = _PROFILE.user_uid )

LEFT JOIN tb_user_email AS _EMAIL ON
	_EMAIL.user_uid = _USER.user_uid
	AND
	_EMAIL.user_email_time_create = ( SELECT MAX(user_profile_time_create) FROM tb_user_email WHERE tb_user_email.user_uid = _USER.user_uid )

LEFT JOIN tb_email_verify AS _VERIFY ON
	_VERIFY.user_uid = _USER.user_uid
	AND
	_VERIFY.email_verify_uid = _EMAIL.email_verify_uid