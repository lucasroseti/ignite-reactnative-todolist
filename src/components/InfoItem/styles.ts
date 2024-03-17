import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  total: {
    backgroundColor: theme.colors.gray400,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    paddingHorizontal: 8
  },
  totalText: {
    color: theme.colors.gray200,
    fontSize: 12,
    fontWeight: 'bold',
  }
})

export const customColor = (colorItem: string) => StyleSheet.create({
  item: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors[colorItem as keyof typeof theme.colors]
  },
})
