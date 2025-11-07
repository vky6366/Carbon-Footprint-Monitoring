package com.nutrino.carbonfootprint.ui.theme

import android.app.Activity
import android.os.Build
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.dynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat

private val DarkColorScheme = darkColorScheme(
    primary = DarkPrimaryGreen,
    secondary = DarkSecondaryGreen,
    tertiary = DarkTertiaryGreen,
    background = DarkBackground,
    surface = DarkSurface,
    surfaceVariant = DarkSurfaceVariant,
    onPrimary = Color.White,
    onSecondary = Color.White,
    onTertiary = Color.White,
    onBackground = OnDarkBackground,
    onSurface = OnDarkBackground,
    primaryContainer = DarkSecondaryGreen,
    onPrimaryContainer = Color(0xFFD1FAE5),
    secondaryContainer = DarkSurfaceVariant,
    onSecondaryContainer = Color(0xFFD1FAE5),
    error = ErrorRed,
    onError = Color.White,
    outline = BorderDark,
    surfaceTint = DarkPrimaryGreen
)

private val LightColorScheme = lightColorScheme(
    primary = PrimaryGreen,
    secondary = SecondaryGreen,
    tertiary = TertiaryGreen,
    background = LightBackground,
    surface = LightSurface,
    surfaceVariant = LightSurfaceVariant,
    onPrimary = Color.White,
    onSecondary = Color.White,
    onTertiary = Color.White,
    onBackground = OnLightBackground,
    onSurface = OnLightBackground,
    primaryContainer = Color(0xFFD1FAE5),
    onPrimaryContainer = Color(0xFF064E3B),
    secondaryContainer = Color(0xFFECFDF5),
    onSecondaryContainer = Color(0xFF064E3B),
    error = ErrorRed,
    onError = Color.White,
    outline = BorderLight,
    surfaceTint = PrimaryGreen
)

@Composable
fun CarbonFootprintTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    // Always use our beautiful custom eco-theme instead of dynamic colors
    dynamicColor: Boolean = false,
    content: @Composable () -> Unit
) {
    // Always use our custom green eco-theme colors
    val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme
    val view = LocalView.current
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = colorScheme.primary.toArgb()
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = darkTheme
        }
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
