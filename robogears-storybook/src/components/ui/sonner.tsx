import { Toaster as Sonner, type ToasterProps } from 'sonner'

const Toaster = (props: ToasterProps) => (
  <Sonner
    position="top-center"
    closeButton
    toastOptions={{
      style: {
        fontFamily: 'JetBrains Mono, ui-monospace, monospace',
        background: 'hsl(130 14% 6.5% / 0.97)',
        color: 'hsl(133 100% 50%)',
        border: '2px solid hsl(191 100% 50% / 0.6)',
        borderRadius: '4px',
        boxShadow: '0 0 24px hsl(191 100% 50% / 0.18)',
        backdropFilter: 'saturate(160%) blur(8px)',
        paddingTop: '14px',
        paddingBottom: '14px',
        paddingLeft: '16px',
        paddingRight: '44px',
      },
      actionButtonStyle: {
        fontFamily: 'JetBrains Mono, ui-monospace, monospace',
        fontWeight: '700',
        fontSize: '13px',
        background: '#00D4FF',
        color: '#05121a',
        borderRadius: '4px',
        padding: '6px 14px',
        height: 'auto',
        border: 'none',
        cursor: 'pointer',
      },
      cancelButtonStyle: {
        fontFamily: 'JetBrains Mono, ui-monospace, monospace',
        fontWeight: '700',
        fontSize: '13px',
        background: 'transparent',
        color: 'hsl(133 35% 50%)',
        borderRadius: '4px',
        padding: '5px 14px',
        height: 'auto',
        border: '2px solid hsl(191 100% 50% / 0.35)',
        cursor: 'pointer',
      },
    }}
    {...props}
  />
)
Toaster.displayName = 'Toaster'

export { Toaster }
