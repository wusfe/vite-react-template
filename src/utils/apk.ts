// const AppInfoParser = require('app-info-parser');


// 提取 apk 文件中包含的应用信息

// @ts-nocheck
export const parseApkInfo = async (
  file: File,
): Promise<{
  icon: string; // base64 字符串
  package: string; // 包名
  versionCode: string;
  versionName: string;
}> => {
  const apkInfo = { icon: '', package: '', versionCode: '', versionName: '' };
  try {
    const parser = new AppInfoParser(file);
    const _apkInfo = await parser.parse();

    if (!_apkInfo) {
      return apkInfo;
    }

    let versionName = '';
    if (_apkInfo.versionName instanceof String) {
      versionName = _apkInfo.versionName;
    }
    if (_apkInfo.versionName instanceof Array && _apkInfo.versionName.length > 0) {
      versionName = _apkInfo.versionName[0];
    }
    return {
      ..._apkInfo,
      versionName,
    };
  } catch (e) {
    console.error(e);
    return apkInfo;
  }
};
