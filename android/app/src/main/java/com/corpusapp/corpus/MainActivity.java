package com.corpusapp.corpus;

import android.os.Bundle;
import android.webkit.WebView;

import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WebView webView = getBridge().getWebView();
        ViewCompat.setOnApplyWindowInsetsListener(webView, (v, insets) -> {
            Insets bars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            float density = getResources().getDisplayMetrics().density;
            int topPx    = Math.round(bars.top    / density);
            int bottomPx = Math.round(bars.bottom / density);
            // Always set --android-safe-top (status bar — Java is reliable for top).
            // Only set --android-safe-bottom IF the system reports a real measured inset.
            // On gesture-nav devices, bars.bottom is 0 because the gesture pill is an
            // overlay (not a real inset). In that case, the JS visualViewport-based
            // computation in index.html computes the correct value — DO NOT overwrite it.
            StringBuilder js = new StringBuilder();
            js.append("document.documentElement.style.setProperty('--android-safe-top','").append(topPx).append("px');");
            if (bottomPx > 0) {
                js.append("document.documentElement.style.setProperty('--android-safe-bottom','").append(bottomPx).append("px');");
            }
            js.append("window.dispatchEvent(new Event('resize'));");
            String script = js.toString();
            webView.post(() -> webView.evaluateJavascript(script, null));
            return insets;
        });
        // Force one dispatch immediately, and another shortly after the WebView has had time to
        // finish loading index.html — the first dispatch can land on a not-yet-loaded document.
        ViewCompat.requestApplyInsets(webView);
        webView.postDelayed(() -> ViewCompat.requestApplyInsets(webView), 500);
    }
}
