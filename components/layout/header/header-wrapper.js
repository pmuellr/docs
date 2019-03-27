import Wrapper from '../wrapper'
import { HEADER_HEIGHT } from '~/lib/constants'

const Header = ({ className, children }) => (
  <header className={className}>
    <Wrapper className="content">{children}</Wrapper>
    <style jsx>{`
      header {
        background: #fff;
        border-bottom: 1px solid #eaeaea;
        height: ${HEADER_HEIGHT}px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
      }

      header > :global(.content) {
        align-items: center;
        display: flex;
        height: 100%;
      }

      @media print {
        header {
          display: none;
        }
      }
    `}</style>
  </header>
)

export default Header
