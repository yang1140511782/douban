/** 
 * api接口的统一出口
 */
// 豆瓣模块接口
import douban from '@/api/interface';
// 其他模块的接口……(多人开发即可导入多个模块)

// 导出接口
export default {    
    douban,
    // ……
}