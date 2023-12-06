"use client";

import React from "react";
import { Responsive, ResponsiveProps, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function ReactGridLayoutComponent({
  layouts,
  className,
  cols,
  breakpoints,
  rowHeight,
  width,
  isResizable,
  children,
}: ResponsiveProps) {
  return (
    <ResponsiveGridLayout
      layouts={layouts}
      className={className}
      cols={cols}
      breakpoints={breakpoints}
      rowHeight={rowHeight}
      width={width}
      isResizable={isResizable}
    >
      {children}
    </ResponsiveGridLayout>
  );
}
