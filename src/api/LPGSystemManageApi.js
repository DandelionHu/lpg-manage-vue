// 信息管理API接口
import _axios from '@/config/http'
import { config } from '@/config/config'

export default class LPGSystemManageApi {
  // 切换组织
  static changeOrg (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysOrgAttach/changeOrg',
      data
    })
  }

  // 退出
  static logout (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/logout',
      data
    })
  }

  // 修改密码
  static editPwd (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysManager/editPwd',
      data
    })
  }

  // 获取一级权限列表
  static findMemuFirst (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysAuthority/findMemuFirst',
      data
    })
  }

  // 获取二三级权限列表
  static findMemuSecond (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysAuthority/findMemuSecond',
      data
    })
  }

  // 获取权限列表key
  static findKeys (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysAuthority/findKeys',
      data
    })
  }

  // 获取权限列表
  static findAuthoritys (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysAuthority/findAll',
      data
    })
  }

  // 获取全部权限
  static findAutAll (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysAuthority/findAutAll',
      data
    })
  }

  // 保存权限
  static saveAut (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysAuthority/saveAut',
      data
    })
  }

  // 标记删除权限
  static deleteAut (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysAuthority/deleteById',
      data
    })
  }

  // 物理删除
  static deleteCheck (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysAuthority/deleteCheck',
      data
    })
  }

  // 获取员工列表
  static sysManagerFindManagers (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysManager/findManagers',
      data
    })
  }

  // 更新状态
  static sysManagerUpdateState (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysManager/updateState',
      data
    })
  }

  // 保存员工
  static sysManagerSaveManager (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysManager/saveManager',
      data
    })
  }

  // 人员详情
  static sysManagerFindById (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysManager/findById',
      data
    })
  }

  // 删除人员
  static sysManagerDeleteByIds (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysManager/deleteByIds',
      data
    })
  }

  // 重置密码
  static sysManagerResetPassword (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysManager/resetPassword',
      data
    })
  }

  // 更换资格证
  static sysManagerCodeAgain (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysManager/codeAgain',
      data
    })
  }

  // 获取组织
  static sysOrgFindOrgs (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysOrg/findOrgs',
      data
    })
  }

  // 保存组织
  static sysOrgSaveOrg (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysOrg/saveOrg',
      data
    })
  }

  // 删除组织
  static sysOrgDeleteByIds (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysOrg/deleteByIds',
      data
    })
  }

  // 查看组织
  static sysOrgFindById (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysOrg/findById',
      data
    })
  }

  // 门市重新制卡
  static sysOrgCreateCodeAgain (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysOrg/createCodeAgain',
      data
    })
  }

  // 获取岗位
  static sysRolePage (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysRole/page',
      data
    })
  }

  // 岗位更新状态
  static sysRoleUpdateState (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysRole/updateState',
      data
    })
  }

  // 岗位详情
  static sysRoleGetById (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysRole/getById',
      data
    })
  }

  // 保存岗位
  static sysRoleSaveRole (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysRole/saveRole',
      data
    })
  }

  // 删除岗位
  static sysRoleDelete (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysRole/delete',
      data
    })
  }

  // 获取组织下的岗位
  static findThisOrgRoles (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysRole/findThisOrgRoles',
      data
    })
  }

  // 获取燃气用户
  static sysGuestFindGuests (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysGuest/findGuests',
      data
    })
  }

  // 燃气用户详情
  static sysGuestFindById (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysGuest/findById',
      data
    })
  }

  // 燃气用户导出
  static sysGuestExport (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysGuest/export',
      data
    })
  }

  // 车辆列表
  static sysCarFindByPage (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysCar/findByPage',
      data
    })
  }

  // 保存车辆
  static sysCarSaveCarData (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysCar/saveCarData',
      data
    })
  }

  // 车辆详情
  static sysCarFindById (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysCar/findById',
      data
    })
  }

  // 删除车辆
  static sysCarDeleteByIds (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysCar/deleteByIds',
      data
    })
  }

  // 更换车辆资格证
  static sysCarUpdateQrCode (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysCar/updateQrCode',
      data
    })
  }

  // 车辆司机
  static sysCarSaveDriverData (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysCar/saveDriverData',
      data
    })
  }

  // 车辆导出
  static sysCarDownload (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysCar/download',
      data
    })
  }

  // 查询特殊岗位 司机 送气工 充装工
  static findSpecialManager (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/admin/sysManager/findSpecialManager',
      data
    })
  }
}
