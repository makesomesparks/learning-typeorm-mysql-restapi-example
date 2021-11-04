CREATE ALGORITHM=MERGE VIEW `view_note` AS

SELECT
_NOTE.note_uid,
_NOTE.user_uid,
COALESCE('', _STATUS.note_status_uid) `status_uid`,
COALESCE('', _NOTE.note_category_uid) `category_uid`,
COALESCE('', _DOCUMENT.note_document_uid) `document_uid`,
COALESCE('', _STORAGE.note_document_storage_uid) `storage_uid`,

COALESCE('', _CATEGORY.note_category_name) `category_name`,
COALESCE('', _CATEGORY.note_category_description) `category_description`,

COALESCE('', _DOCUMENT.note_document_title) `title`,
COALESCE('', _DOCUMENT.note_document_title_curl) `title_curl`,
COALESCE('', _DOCUMENT.note_document_body) `document`,
COALESCE('', _STORAGE.note_document_storage_data) `storage`,

COALESCE('', _STATUS.note_status_is_public) `is_public`,
COALESCE('', _STATUS.note_status_is_delete) `is_delete`,
COALESCE('', _STATUS.note_status_is_invisible) `is_invisible`,
COALESCE('', _CATEGORY.note_category_is_deprecate) `is_deprecate_category`,


COALESCE('', _NOTE.note_time_create) `time`,
COALESCE('', _CATEGORY.note_category_time_create) `time_category`,
COALESCE('', _STATUS.note_status_time_create) `time_status`,
COALESCE('', _DOCUMENT.note_document_time_create) `time_document`,
COALESCE('', _STORAGE.note_document_storage_time_create) `time_storage`


FROM tb_note AS _NOTE

LEFT JOIN tb_note_status AS _STATUS ON
_STATUS.note_uid = _NOTE.note_uid
AND
_STATUS.note_status_is_expire = 0
AND
_STATUS.note_status_time_create = (SELECT MAX(note_status_time_create) FROM tb_note_status WHERE tb_note_status.note_uid = _STATUS.note_uid)

LEFT JOIN tb_note_category AS _CATEGORY ON
_CATEGORY.note_category_uid = _NOTE.note_category_uid

LEFT JOIN tb_note_document AS _DOCUMENT ON
_DOCUMENT.note_uid = _NOTE.note_uid
AND
_DOCUMENT.note_document_time_create = (SELECT MAX(note_document_time_create) FROM tb_note_document WHERE tb_note_document.note_uid = _DOCUMENT.note_uid)

LEFT JOIN tb_note_document_storage AS _STORAGE ON
_STORAGE.note_document_uid = _DOCUMENT.note_document_uid
AND
_STORAGE.note_document_storage_time_create = (SELECT MAX(note_document_storage_time_create) FROM tb_note_document_storage WHERE tb_note_document_storage.note_document_uid = _STORAGE.note_document_uid)

