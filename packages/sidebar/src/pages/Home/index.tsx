import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faChartLine, faCode, faFolder } from '@fortawesome/free-solid-svg-icons'

import Timer from './Timer'

function Home() {
  const { t } = useTranslation()
  return (
    <>
      <Timer />
      <div className="w-full overflow-hidden">
        <vscode-tabs selected-index={0}>
          <vscode-tab-header slot="header" title={t('time.title')}>
            <span className='text-base/5 sm:hidden'><FontAwesomeIcon icon={faClock} /></span>
            <span className='text-xs/5 max-sm:hidden'>{t('time.title')}</span>
          </vscode-tab-header>
          <vscode-tab-panel className="w-full">
            {t('time.title')}
          </vscode-tab-panel>
          <vscode-tab-header slot="header" title={t('activity.title')}>
            <span className='text-base/5 sm:hidden'><FontAwesomeIcon icon={faChartLine} /></span>
            <span className='text-xs/5 max-sm:hidden'>{t('activity.title')}</span>
          </vscode-tab-header>
          <vscode-tab-panel className="w-full">
            {t('activity.title')}
          </vscode-tab-panel>
          <vscode-tab-header slot="header" title={t('language.title')}>
            <span className='text-base/5 sm:hidden'><FontAwesomeIcon icon={faCode} /></span>
            <span className='text-xs/5 max-sm:hidden'>{t('language.title')}</span>
          </vscode-tab-header>
          <vscode-tab-panel className="w-full">
            {t('language.title')}
          </vscode-tab-panel>
          <vscode-tab-header slot="header" title={t('workspace.title')}>
            <span className='text-base/5 sm:hidden'><FontAwesomeIcon icon={faFolder} /></span>
            <span className='text-xs/5 max-sm:hidden'>{t('workspace.title')}</span>
          </vscode-tab-header>
          <vscode-tab-panel className="w-full">
            {t('workspace.title')}
          </vscode-tab-panel>
        </vscode-tabs>
      </div>
    </>
  )
}

export default Home