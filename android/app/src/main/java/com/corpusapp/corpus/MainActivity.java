package com.corpusapp.corpus;

import android.os.Bundle;
import android.view.View;

import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().getDecorView().post(() -> {
            View content = findViewById(android.R.id.content);
            if (content == null) return;
            ViewCompat.setOnApplyWindowInsetsListener(content, (v, insets) -> {
                Insets bars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
                Insets gestures = insets.getInsets(WindowInsetsCompat.Type.systemGestures());
                int bottom = Math.max(bars.bottom, gestures.bottom);
                v.setPadding(bars.left, bars.top, bars.right, bottom);
                return WindowInsetsCompat.CONSUMED;
            });
            ViewCompat.requestApplyInsets(content);
        });
    }
}
