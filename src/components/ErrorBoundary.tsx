import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-semibold text-red-400 mb-4">页面加载出错</h2>
            <p className="text-silver-400 mb-2">错误信息:</p>
            <pre className="text-sm text-silver-500 bg-fog-800 p-4 rounded-lg overflow-x-auto">
              {this.state.error?.message}
            </pre>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="mt-4 px-6 py-2 glass-card rounded-full text-silver-300 hover:text-gold-400 transition-colors"
            >
              刷新重试
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
