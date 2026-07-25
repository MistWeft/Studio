# 拾雾工作室（MistWeftStudio）官网 - 产品需求文档

## Overview
- **Summary**: 拾雾工作室官方网站，展示工作室的创作理念、服务项目和联系方式
- **Purpose**: 建立品牌形象，为潜在客户和合作伙伴提供了解工作室的窗口
- **Target Users**: 潜在客户、合作伙伴、关注者

## Goals
- 创建一个具有艺术感和神秘感的工作室官网
- 展示工作室的核心服务（游戏制作、微电影拍摄、文学创作、短视频创作）
- 提供便捷的联系方式供用户咨询合作
- 预留项目案例展示区域（当前为空）

## Non-Goals (Out of Scope)
- 完整的项目管理系统
- 用户注册/登录功能
- 在线支付/电商功能
- 后台管理系统

## Background & Context
- 工作室由几名高中生组成
- 工作室口号："以文字记述世界，以科技留影未来"
- 目标："以不一样的视角看世界，以不一样的笔法写世界，在垃圾的生活留下荒废的造物"

## Functional Requirements
- **FR-1**: 首页展示工作室名称、口号和简介
- **FR-2**: 展示四项核心服务（游戏制作、微电影拍摄、文学创作、短视频创作）
- **FR-3**: 项目案例页面（预留展示区域）
- **FR-4**: 联系方式页面，包含表单和社交链接
- **FR-5**: 响应式设计，适配移动端和桌面端

## Non-Functional Requirements
- **NFR-1**: 页面加载速度 < 2秒
- **NFR-2**: 视觉设计具有艺术感，符合工作室调性
- **NFR-3**: 交互流畅，具有适当的动画效果

## Constraints
- **Technical**: React + TypeScript + TailwindCSS + Vite
- **Dependencies**: lucide-react 图标库

## Assumptions
- 用户不需要登录即可浏览网站
- 项目案例目前为空，仅展示占位提示
- 联系表单仅作展示，不连接后端

## Acceptance Criteria

### AC-1: 首页Hero区域展示
- **Given**: 用户访问网站首页
- **When**: 页面加载完成
- **Then**: 显示全屏背景、工作室名称"MistWeftStudio"和口号"以文字记述世界，以科技留影未来"
- **Verification**: `human-judgment`

### AC-2: 工作室简介展示
- **Given**: 用户访问网站首页
- **When**: 向下滚动页面
- **Then**: 显示工作室介绍和创作理念
- **Verification**: `human-judgment`

### AC-3: 服务项目展示
- **Given**: 用户访问网站首页
- **When**: 浏览服务项目区域
- **Then**: 展示四个服务卡片：游戏制作、微电影拍摄、文学创作、短视频创作
- **Verification**: `programmatic`

### AC-4: 项目案例页面
- **Given**: 用户点击导航栏"项目案例"
- **When**: 页面跳转
- **Then**: 显示项目案例页面，包含占位提示"敬请期待"
- **Verification**: `programmatic`

### AC-5: 联系方式页面
- **Given**: 用户点击导航栏"联系方式"
- **When**: 页面跳转
- **Then**: 显示联系表单（姓名、邮箱、留言）和社交媒体链接
- **Verification**: `programmatic`

### AC-6: 响应式适配
- **Given**: 在不同设备上访问网站
- **When**: 调整浏览器窗口大小或在移动设备上查看
- **Then**: 页面布局自适应，导航栏变为汉堡菜单
- **Verification**: `human-judgment`

## Open Questions
- [ ] 暂无

