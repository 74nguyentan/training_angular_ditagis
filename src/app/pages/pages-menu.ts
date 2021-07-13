import { NbMenuItem } from '@nebular/theme';
import { AppIdEnum } from '../shared/services/phan-quyen/chuc-nang.interface';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Công trình xây dựng',
    link: '/cong-trinh-xay-dung/cong-trinh',
    data: AppIdEnum['CongTrinhXayDung'],
    hidden: true,
  },
  { title: 'Khác', group: true },
  {
    title: 'Traininggg',
    link: '/training/demo',
  },
  {
    title: 'In-Output',
    link: '/input-output/parent'
  },
  {
    title: 'View child',
    link: '/viewchild/parent-viewchild'
  },
  {
    title: 'Demo service',
    link: '/demo-service/view-comp'
  },
  {
    title: 'load data service',
    link: '/load-data/view-data'
  },
  {
    title: 'load data table',
    link: '/data-table/view-table'
  },
  
];
