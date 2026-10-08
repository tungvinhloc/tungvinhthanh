
import React from 'react';
import { MathSolution } from '../types';
import MathRenderer from './MathRenderer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SolutionViewProps {
  solution: MathSolution;
}

const SolutionView: React.FC<SolutionViewProps> = ({ solution }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded uppercase tracking-wider">
            {solution.topic}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-slate-800">{solution.problemSummary}</h2>
      </section>

      {solution.graphData && solution.graphData.length > 0 && (
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Visualization</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={solution.graphData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="x" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Line type="monotone" dataKey="y" stroke="#14b8a6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      )}

      <section className="space-y-6">
        <h3 className="text-lg font-semibold text-slate-700">Step-by-Step Solution</h3>
        <div className="space-y-4">
          {solution.steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 group">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center font-bold border border-primary-100 shrink-0">
                  {idx + 1}
                </div>
                {idx < solution.steps.length - 1 && (
                  <div className="w-0.5 h-full bg-slate-100 group-hover:bg-primary-100 transition-colors my-1" />
                )}
              </div>
              <div className="pb-4">
                <p className="text-slate-600 mb-2 leading-relaxed">{step.explanation}</p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 overflow-x-auto">
                  <MathRenderer formula={step.formula} displayMode />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
        <h3 className="text-lg font-semibold text-emerald-800 mb-2">Final Answer</h3>
        <div className="text-emerald-900 font-bold">
          <MathRenderer formula={solution.finalAnswer} displayMode />
        </div>
      </section>
    </div>
  );
};

export default SolutionView;
