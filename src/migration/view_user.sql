CREATE ALGORITHM=MERGE VIEW `view_user` AS

SELECT
TBUSER.user_uid,

COALESCE('', TBUSEREMAIL.user_email_address) `email_address`,
COALESCE('', TBUSERPROFILE.user_profile_id) `id`,
COALESCE('', TBUSERPROFILE.user_profile_name) `name`,
COALESCE('', TBUSERPASSWORD.user_password_hash) `password_hash`,

TBUSER.user_timestamp_create `timestamp_user`,
COALESCE('0000-00-00 00:00:00.000', TBUSEREMAIL.user_email_timestamp_create) `timestamp_email`,
COALESCE('0000-00-00 00:00:00.000', TBUSERPROFILE.user_profile_timestamp_create) `timestam_profile`,
COALESCE('0000-00-00 00:00:00.000', TBUSERPASSWORD.user_password_timestamp_create) `timestamp_password`


FROM tb_user AS TBUSER

LEFT JOIN tb_user_email AS TBUSEREMAIL ON
	TBUSEREMAIL.user_uid = TBUSER.user_uid
	AND
	TBUSEREMAIL.user_email_timestamp_create = ( SELECT MAX(user_email_timestamp_create) FROM tb_user_email WHERE tb_user_email.user_uid = TBUSEREMAIL.user_uid )

LEFT JOIN tb_user_password AS TBUSERPASSWORD ON
	TBUSERPASSWORD.user_uid = TBUSER.user_uid
	AND
	TBUSERPASSWORD.user_password_timestamp_create = ( SELECT MAX(user_password_timestamp_create) FROM tb_user_password WHERE tb_user_password.user_uid = TBUSERPASSWORD.user_uid )

LEFT JOIN tb_user_profile AS TBUSERPROFILE ON
	TBUSERPROFILE.user_uid = TBUSER.user_uid
	AND
	TBUSERPROFILE.user_profile_timestamp_create = ( SELECT MAX(user_profile_timestamp_create) FROM tb_user_password WHERE tb_user_password.user_uid = TBUSERPROFILE.user_uid )