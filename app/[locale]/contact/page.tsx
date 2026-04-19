'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import FloatingTriangles from '@/components/FloatingTriangles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, MessageCircle, Mail, CheckCircle } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  company: z.string().min(1, 'Company is required'),
  website: z.string().optional(),
  budget: z.string().min(1, 'Please select a budget'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export default function ContactPage() {
  const t = useTranslations()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    try {
      // TODO: Connect to Formspree or Resend — replace URL below
      // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })
      console.log('Form data:', data)
      setSubmitted(true)
    } catch {
      setError(true)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-soft-lilac/60 bg-white text-midnight-navy text-sm placeholder-midnight-navy/30 focus:outline-none focus:border-lavender-blue transition-colors'
  const errorClass = 'text-xs text-red-500 mt-1'

  return (
    <>
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-16 overflow-hidden">
        <FloatingTriangles count={5} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
            {t('contact.hero.eyebrow')}
          </p>
          <h1 className="text-[40px] lg:text-[56px] font-bold leading-[1.06] tracking-[-0.02em] text-midnight-navy">
            {t('contact.hero.h1Part1')}{' '}
            <span className="gradient-text">{t('contact.hero.h1Highlight')}</span>
          </h1>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* CONTACT OPTIONS */}
      <section className="relative bg-white py-16 overflow-hidden">
        <FloatingTriangles count={4} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {/* Calendly */}
            <div className="gradient-border">
              <div className="p-8 text-center">
                <Calendar size={32} className="text-royal-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-midnight-navy mb-3">
                  {t('contact.calendly.title')}
                </h3>
                <p className="text-sm text-midnight-navy/60 leading-relaxed mb-6">
                  {t('contact.calendly.desc')}
                </p>
                <a
                  href="https://calendly.com/abreu5322/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-6 py-3 w-full"
                >
                  {t('contact.calendly.cta')}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl border border-soft-lilac/40 p-8 text-center hover:border-lavender-blue/40 transition-colors">
              <MessageCircle size={32} className="text-lavender-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-midnight-navy mb-3">
                {t('contact.whatsapp.title')}
              </h3>
              <p className="text-sm text-midnight-navy/60 leading-relaxed mb-2">
                {t('contact.whatsapp.desc')}
              </p>
              <p className="text-sm font-semibold text-midnight-navy mb-6">
                {t('contact.whatsapp.number')}
              </p>
              <a
                href="https://wa.me/584242374975"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm px-6 py-3 w-full"
              >
                {t('contact.whatsapp.cta')}
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl border border-soft-lilac/40 p-8 text-center hover:border-lavender-blue/40 transition-colors">
              <Mail size={32} className="text-lavender-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-midnight-navy mb-3">
                {t('contact.email.title')}
              </h3>
              <p className="text-sm text-midnight-navy/60 leading-relaxed mb-2">
                {t('contact.email.desc')}
              </p>
              <p className="text-sm font-semibold text-midnight-navy mb-6">
                {t('contact.email.address')}
              </p>
              <a
                href="mailto:abreu5322@gmail.com"
                className="btn-ghost text-sm px-6 py-3 w-full"
              >
                {t('contact.email.cta')}
              </a>
            </div>
          </div>

          <div className="gradient-divider mb-16" />

          {/* FORM */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-midnight-navy mb-8 text-center">
              {t('contact.form.title')}
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={48} className="text-lavender-blue mx-auto mb-4" />
                <p className="text-lg font-semibold text-midnight-navy">
                  {t('contact.form.success')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-midnight-navy mb-1.5">
                      {t('contact.form.nameLabel')}
                    </label>
                    <input
                      {...register('name')}
                      placeholder={t('contact.form.namePlaceholder')}
                      className={inputClass}
                    />
                    {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-midnight-navy mb-1.5">
                      {t('contact.form.emailLabel')}
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder={t('contact.form.emailPlaceholder')}
                      className={inputClass}
                    />
                    {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-midnight-navy mb-1.5">
                      {t('contact.form.companyLabel')}
                    </label>
                    <input
                      {...register('company')}
                      placeholder={t('contact.form.companyPlaceholder')}
                      className={inputClass}
                    />
                    {errors.company && <p className={errorClass}>{errors.company.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-midnight-navy mb-1.5">
                      {t('contact.form.websiteLabel')}
                    </label>
                    <input
                      {...register('website')}
                      placeholder={t('contact.form.websitePlaceholder')}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-midnight-navy mb-1.5">
                    {t('contact.form.budgetLabel')}
                  </label>
                  <select {...register('budget')} className={inputClass}>
                    <option value="">— Select —</option>
                    <option value="audit">{t('contact.form.budgetOptions.audit')}</option>
                    <option value="monthly">{t('contact.form.budgetOptions.monthly')}</option>
                    <option value="custom">{t('contact.form.budgetOptions.custom')}</option>
                  </select>
                  {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-midnight-navy mb-1.5">
                    {t('contact.form.messageLabel')}
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className={inputClass}
                  />
                  {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center">{t('contact.form.error')}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-base px-8 py-3.5 w-full disabled:opacity-60"
                >
                  {isSubmitting ? '...' : t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
